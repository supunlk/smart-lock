import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { AttributeService } from '@core/services/attribute.service';
import { setTelemetryData } from '@root-store/telemetry/telemetry.actions';


@Injectable()
export class TelemetryEffects {


  /************************************************************************
   * publish
   */
  loadUserProfile$ = createEffect(() => this._actions$.pipe(
    ofType(setTelemetryData),
    mergeMap(({doorData}) => {
      return this._attributeService.publishAttribute(doorData);
    })
  ), {dispatch: false});


  constructor(private _actions$: Actions,
              private _attributeService: AttributeService) {
  }

}
