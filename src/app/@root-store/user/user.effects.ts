import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { UserService } from '@core/services/user.service';
import {
  loadUserDevices,
  loadUserDevicesFailure,
  loadUserDevicesSuccess,
  loadUserProfile,
  loadUserProfileFailure,
  loadUserProfileSuccess
} from '@root-store/user/user.actions';
import { WebsocketService } from '@core/services/websocket.service';


@Injectable()
export class UserEffects {

  /************************************************************************
   * Load User Profile
   */
  loadUserProfile$ = createEffect(() => this._actions$.pipe(
    ofType(loadUserProfile),
    mergeMap(() => {
      return this._userService.getUserProfile().pipe(
        map(userProfile => loadUserProfileSuccess({userProfile})),
        catchError((res: HttpErrorResponse) => {
          return of(loadUserProfileFailure());
        })
      );
    })
  ));

  /************************************************************************
   * Load User Profile
   */
  loadUserDevices$ = createEffect(() => this._actions$.pipe(
    ofType(loadUserDevices),
    mergeMap(() => {
      return this._userService.getUserDevices().pipe(
        map(userDevices => {
          this._websocketService.subscribeToDevice(userDevices[0].id.id);
          return loadUserDevicesSuccess({userDevices});
        }),
        catchError((res: HttpErrorResponse) => {
          return of(loadUserDevicesFailure());
        })
      );
    })
  ));

  constructor(private _actions$: Actions,
              private _userService: UserService,
              private _websocketService: WebsocketService) {
  }

}
