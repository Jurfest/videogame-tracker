import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as GameActions from './game.actions';
import { Game } from '../../entities/game';

export const GAME_FEATURE_KEY = 'videogameTracker-game';

export interface State extends EntityState<Game> {
  selectedId?: string | number; // which Game record has been selected
  loaded: boolean; // has the Game list been loaded
  error?: string | null; // last known error (if any)
}

export interface GamePartialState {
  readonly [GAME_FEATURE_KEY]: State;
}

export const gameAdapter: EntityAdapter<Game> = createEntityAdapter<Game>();

export const initialState: State = gameAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const gameReducer = createReducer(
  initialState,
  on(GameActions.loadGame, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(GameActions.loadGameSuccess, (state, { game }) =>
    gameAdapter.upsertMany(game, { ...state, loaded: true })
  ),
  on(GameActions.loadGameFailure, (state, { error }) => ({ ...state, error }))
);

export function reducer(state: State | undefined, action: Action) {
  return gameReducer(state, action);
}
