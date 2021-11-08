import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '@env/environment';
import { EffectsModule } from '@ngrx/effects';
import { metaReducers, reducers } from './index';
import { AuthEffects } from '@root-store/auth/auth.effects';
import { UserEffects } from './user/user.effects';
import { TelemetryEffects } from '@root-store/telemetry/telemetry.effects';



@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([
      AuthEffects,
      UserEffects,
      TelemetryEffects
    ]),
  ]
})
export class RootStoreModule { }
