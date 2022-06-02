import { createAction, props } from '@ngrx/store';

import { Game } from '../../entities/game';

export const loadGames = createAction(
  '[Game Page] Load Games',
  props<{ title: string }>()
);

export const loadGamesSuccess = createAction(
  '[Game/API] Load Games Success',
  props<{ game: Game[] }>()
);

export const loadGamesFailure = createAction(
  '[Game/API] Load Games Failure',
  props<{ error: string }>()
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
  props<{ error: string }>()
);
