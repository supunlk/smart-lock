import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '@env/environment';
import { authFeatureKey, authReducer, AuthState } from '@root-store/auth/auth.reducer';
import { userFeatureKey, userReducer, UserState } from '@root-store/user/user.reducer';

export const rootStoreFeatureKey = 'rootStore';

export interface State {
  [authFeatureKey]: AuthState;
  [userFeatureKey]: UserState;
}

export const reducers: ActionReducerMap<State> = {
  [authFeatureKey]: authReducer,
  [userFeatureKey]: userReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
