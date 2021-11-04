import { createAction, props } from '@ngrx/store';
import { AuthResponse } from '@models/auth.model';

/************************************************************************
 * login
 */
export const login = createAction(
  '[Auth] login',
  props<{ username: string, password: string }>()
);

export const loginSuccess = createAction(
  '[Auth] login Success',
  props<{ authResponse: AuthResponse }>()
);

export const loginFailure = createAction(
  '[Auth] login Failure',
  props<{ error: any }>()
);


