import { createFeatureSelector, createSelector } from '@ngrx/store';
import { authFeatureKey, AuthState } from '@root-store/auth/auth.reducer';
import { SL_TOKEN } from '@models/local-storage.model';

export const selectAuthState = createFeatureSelector<AuthState>(authFeatureKey);

/************************************************************************
 * is Login progress
 * > boolean
 */
export const isLoginInProgress = createSelector(
  selectAuthState,
  (authState) => authState.isLoginInProgress
);

/************************************************************************
 * select login failure message
 * > string
 */
export const selectLoinFailureMessage = createSelector(
  selectAuthState,
  (authState) => authState.errorMessage
);

/************************************************************************
 * is Authorized
 * > boolean
 */
export const isAuthorized = createSelector(
  selectAuthState,
  (authState) => !!localStorage.getItem(SL_TOKEN)
);
