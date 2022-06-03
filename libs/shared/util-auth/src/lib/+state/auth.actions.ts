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
