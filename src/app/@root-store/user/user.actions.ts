import { createAction, props } from '@ngrx/store';
import { User, UserDevice } from '@models/user.model';

export const loadUsers = createAction(
  '[User] Load Users'
);

/************************************************************************
 * Load User Profile
 */
export const loadUserProfile = createAction(
  '[User] Load Users'
);
export const loadUserProfileSuccess = createAction(
  '[User] Load Users Success',
  props<{ userProfile: User }>()
);

export const loadUserProfileFailure = createAction(
  '[User] Load Users Failure'
);

/************************************************************************
 * Load User Devices
 */
export const loadUserDevices = createAction(
  '[User] load User Devices'
);
export const loadUserDevicesSuccess = createAction(
  '[User] load User Devices Success',
  props<{ userDevices: UserDevice[] }>()
);

export const loadUserDevicesFailure = createAction(
  '[User] load User Devices Failure'
);




