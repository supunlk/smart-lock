import { createFeatureSelector, createSelector } from '@ngrx/store';
import { userFeatureKey, UserState } from '@root-store/user/user.reducer';

export const selectUserState = createFeatureSelector<UserState>(userFeatureKey);

/************************************************************************
 * is user data loading
 * > boolean
 */
export const isUserDataLoading = createSelector(
  selectUserState,
  (userState) => userState.isUserDataLoading
);

/************************************************************************
 * is user data loaded
 * > boolean
 */
export const isUserDataLoaded = createSelector(
  selectUserState,
  (userState) => userState.isUserDataLoaded
);

/************************************************************************
 * select User Profile
 * > user
 */
export const selectUserProfile = createSelector(
  selectUserState,
  (userState) => userState.userProfile
);
