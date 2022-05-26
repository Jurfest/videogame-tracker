import { createAction, props } from '@ngrx/store';
import { Game } from '../../entities/game';

export const loadGame = createAction('[Game] Load Game');

export const loadGameSuccess = createAction(
  '[Game] Load Game Success',
  props<{ game: Game[] }>()
);

export const loadGameFailure = createAction(
  '[Game] Load Game Failure',
  props<{ error: any }>()
);
