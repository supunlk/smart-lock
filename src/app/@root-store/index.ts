import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '@env/environment';
import { authFeatureKey, authReducer, AuthState } from '@root-store/auth/auth.reducer';

export const rootStoreFeatureKey = 'rootStore';

export interface State {
  [authFeatureKey]: AuthState;
}

export const reducers: ActionReducerMap<State> = {
  [authFeatureKey]: authReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
