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
  on(GameActions.loadGames, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(GameActions.loadGamesSuccess, (state, { game }) =>
    gameAdapter.setAll(game, { ...state, loaded: true })
  ),
  on(GameActions.loadGamesFailure, (state, { error }) => ({ ...state, error })),
  on(GameActions.createGame, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(GameActions.createGameSuccess, (state, { game }) =>
    gameAdapter.addOne(game, { ...state, loaded: true })
  ),
  on(GameActions.createGameFailure, (state, { error }) => ({ ...state, error }))
);

export function reducer(state: State | undefined, action: Action) {
  return gameReducer(state, action);
}
