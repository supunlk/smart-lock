import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { isUserDataLoaded } from '@root-store/user/user.selectors';
import { first, map } from 'rxjs/operators';
import { loadUserDevices, loadUserProfile } from '@root-store/user/user.actions';
import { WebsocketService } from '@core/services/websocket.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<boolean> {

  constructor(private _store: Store,
              private _websocketService: WebsocketService) {
    this._websocketService.connect();
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this._store.select(isUserDataLoaded).pipe(
      map(isLoaded => {
        if (!isLoaded) {
          this._store.dispatch(loadUserProfile());
          this._store.dispatch(loadUserDevices());
        }
        return true;
      }),
      first()
    );
  }
}
