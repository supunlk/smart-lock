import { Injectable } from '@angular/core';
import { ApiService } from '@core/services/api.service';
import { Observable } from 'rxjs';
import { AuthResponse } from '@models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _api: ApiService) {
  }

  login(username: string, password: string): Observable<AuthResponse> {
    return this._api.post('auth/login', {username, password});
  }
}
