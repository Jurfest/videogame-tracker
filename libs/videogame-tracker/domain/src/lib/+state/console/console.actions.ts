import { createAction, props } from '@ngrx/store';

import { ConsoleEntity } from '../../entities/console.models';

export const loadConsoleList = createAction('[Console Page] Init');

export const loadConsoleListSuccess = createAction(
  '[Console/API] Load Console List Success',
  props<{ consoles: ConsoleEntity[] }>()
);

export const loadConsoleListFailure = createAction(
  '[Console/API] Load Console List Failure',
  props<{ error: any }>()
);
