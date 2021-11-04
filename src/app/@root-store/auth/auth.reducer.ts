import { Action, createReducer, on } from '@ngrx/store';
import * as AuthActions from '../auth/auth.actions';


export const authFeatureKey = 'auth';

export interface AuthState {
  isAuthorized: boolean;
  isLoginInProgress: boolean;
  errorMessage?: string;
  token?: string;
  refreshToken?: string;
}

export const initialState: AuthState = {
  isAuthorized: false,
  isLoginInProgress: false
};


export const authReducer = createReducer(
  initialState,

  /************************************************************************
   * Login
   */
  on(AuthActions.login,
    (state) => {
      return {
        ...state,
        isLoginInProgress: true
      };
    }
  ),
  on(AuthActions.loginSuccess,
    (state, {authResponse}) => {
      return {
        ...state,
        isLoginInProgress: false,
        token: authResponse.token,
        refreshToken: authResponse.refreshToken
      };
    }
  ),
  on(AuthActions.loginFailure,
    (state, {error}) => {
      return {
        ...state,
        isLoginInProgress: false,
        errorMessage: error
      };
    }
  ),
);

