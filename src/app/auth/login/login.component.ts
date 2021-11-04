import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { login } from '@root-store/auth/auth.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { isLoginInProgress, selectLoinFailureMessage } from '@root-store/auth/auth.selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isLoginProgress$?: Observable<boolean>;
  loinFailureMessage$?: Observable<string | undefined>;

  constructor(private _fb: FormBuilder,
              private _store: Store) {
    this.loginForm = _fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.isLoginProgress$ = this._store.select(isLoginInProgress);
    this.loinFailureMessage$ = this._store.select(selectLoinFailureMessage);
  }

  onLogin(): void {
    if (this.loginForm.invalid) {
      Object.keys(this.loginForm.controls).forEach(field => {
        const control = this.loginForm.get(field);
        if (control instanceof FormControl) {
          control.markAsTouched({onlySelf: true});
        }
      });
      return;
    }
    this._store.dispatch(login(this.loginForm.value));
  }

}
