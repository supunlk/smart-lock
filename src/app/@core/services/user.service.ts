import { Injectable } from '@angular/core';
import { ApiService } from '@core/services/api.service';
import { Observable } from 'rxjs';
import { User, UserDevice } from '@models/user.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _api: ApiService) {
  }

  getUserProfile(): Observable<User> {
    return this._api.get('auth/user');
  }

  getUserDevices(): Observable<UserDevice[]> {
    return this._api.get('user/devices?limit=1').pipe(
      map((res: any) => res.data)
    );
  }
}
