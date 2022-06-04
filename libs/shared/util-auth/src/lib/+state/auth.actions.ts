import { createAction, props } from '@ngrx/store';

import { AuthEntity } from './auth.models';

export const login = createAction(
  '[Auth Page] Login',
  props<{ user: string; password: string }>()
);

export const loginSuccess = createAction(
  '[Auth/API] Login Success',
  props<{ auth: AuthEntity }>()
);

export const loginFailure = createAction(
  '[Auth/API] Login Failure',
  props<{ error: string }>()
);

export const logout = createAction(
  '[Auth Page] Logout',
  props<{ userId: string }>()
);

export const logoutSuccess = createAction(
  '[Auth/API] Logout Success',
  props<{ userId: string }>()
);

export const logoutFailure = createAction(
  '[Auth/API] Logout Failure',
  props<{ error: string }>()
);
