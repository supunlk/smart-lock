import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '@core/services/auth.service';
import { login, loginFailure, loginSuccess, logout } from '@root-store/auth/auth.actions';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { SL_TOKEN } from '@models/local-storage.model';


@Injectable()
export class AuthEffects {

  /************************************************************************
   * Login
   */
  login$ = createEffect(() => this._actions$.pipe(
    ofType(login),
    mergeMap(({username, password}) => {
      return this._authService.login(username, password).pipe(
        map(res => loginSuccess({authResponse: res})),
        catchError((res: HttpErrorResponse) => {
          return of(loginFailure({error: res.error.message}));
        })
      );
    })
  ));

  loginSuccess$ = createEffect(() => this._actions$.pipe(
    ofType(loginSuccess),
    tap(({authResponse}) => localStorage.setItem(SL_TOKEN, authResponse.token)),
    tap(() => this._router.navigate(['/']))
  ), {dispatch: false});

  /************************************************************************
   * Logout
   */
  logout$ = createEffect(() => this._actions$.pipe(
    ofType(logout),
    tap(() => this._router.navigate(['auth', 'login'])),
    tap(() => localStorage.removeItem(SL_TOKEN)),
  ), {dispatch: false});

  constructor(private _actions$: Actions,
              private _authService: AuthService,
              private _router: Router) {
  }

}
