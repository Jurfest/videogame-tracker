import { createAction, props } from '@ngrx/store';
import { Game } from '../../entities/game';
// import { GameEntity } from './game.models';

export const loadGame = createAction('[Game Page] Load Game');

export const loadGameSuccess = createAction(
  '[Game/API] Load Game Success',
  props<{ game: Game[] }>()
);

export const loadGameFailure = createAction(
  '[Game/API] Load Game Failure',
  props<{ error: any }>()
);
