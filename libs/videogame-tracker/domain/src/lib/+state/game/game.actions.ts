import { createAction, props } from '@ngrx/store';

import { Game } from '../../entities/game';

export const loadGame = createAction('[Game Page] Load Game');

export const loadGameSuccess = createAction(
  '[Game/API] Load Game Success',
  props<{ game: Game[] }>()
);

export const loadGameFailure = createAction(
  '[Game/API] Load Game Failure',
  props<{ error: any }>()
);

export const createGame = createAction(
  '[Game Page] Create Game',
  props<{ game: Game }>()
);

export const createGameSuccess = createAction(
  '[Game/API] Create Game Success',
  props<{ game: Game }>()
);

export const createGameFailure = createAction(
  '[Game/API] Create Game Failure',
  props<{ error: any }>()
);
