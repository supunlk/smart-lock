import { createReducer, on } from '@ngrx/store';
import { User, UserDevice } from '@models/user.model';
import * as UserActions from './user.actions';


export const userFeatureKey = 'user';

export interface UserState {
  isUserDataLoaded: boolean;
  isUserDataLoading: boolean;
  userProfile: User | null;
  userDevices: UserDevice[] | null;
}

export const initialState: UserState = {
  isUserDataLoaded: false,
  isUserDataLoading: false,
  userProfile: null,
  userDevices: null
};


export const userReducer = createReducer(
  initialState,

  /************************************************************************
   * Load User Profile
   */
  on(UserActions.loadUserProfile,
    (state) => {
      return {
        ...state,
        isUserDataLoading: true
      };
    }
  ),
  on(UserActions.loadUserProfileSuccess,
    (state, {userProfile}) => {
      return {
        ...state,
        isUserDataLoading: false,
        isUserDataLoaded: true,
        userProfile
      };
    }
  ),
  on(UserActions.loadUserProfileFailure,
    (state) => {
      return {
        ...state,
        isUserDataLoading: false
      };
    }
  ),

  /************************************************************************
   * Load User Devices
   */
  on(UserActions.loadUserDevicesSuccess,
    (state, {userDevices}) => {
      return {
        ...state,
        userDevices
      };
    }
  ),
);

