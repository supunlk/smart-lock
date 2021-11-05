import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '@env/environment';
import { authFeatureKey, authReducer, AuthState } from '@root-store/auth/auth.reducer';
import { userFeatureKey, userReducer, UserState } from '@root-store/user/user.reducer';
import { telemetryFeatureKey, telemetryReducer, TelemetryState } from '@root-store/telemetry/telemetry.reducer';

export const rootStoreFeatureKey = 'rootStore';

export interface State {
  [authFeatureKey]: AuthState;
  [userFeatureKey]: UserState;
  [telemetryFeatureKey]: TelemetryState;
}

export const reducers: ActionReducerMap<State> = {
  [authFeatureKey]: authReducer,
  [userFeatureKey]: userReducer,
  [telemetryFeatureKey]: telemetryReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
