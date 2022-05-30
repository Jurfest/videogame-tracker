import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as ConsoleActions from './console.actions';
import { ConsoleEntity } from '../../entities/console.models';

export const CONSOLE_FEATURE_KEY = 'console';

export interface State extends EntityState<ConsoleEntity> {
  selectedId?: string | number; // which Console record has been selected
  loaded: boolean; // has the Console list been loaded
  error?: string | null; // last known error (if any)
}

export interface ConsolePartialState {
  readonly [CONSOLE_FEATURE_KEY]: State;
}

export const consoleAdapter: EntityAdapter<ConsoleEntity> =
  createEntityAdapter<ConsoleEntity>();

export const initialState: State = consoleAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const consoleReducer = createReducer(
  initialState,
  on(ConsoleActions.loadConsoleList, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(ConsoleActions.loadConsoleListSuccess, (state, { consoles }) =>
    consoleAdapter.setAll(consoles, { ...state, loaded: true })
  ),
  on(ConsoleActions.loadConsoleListFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return consoleReducer(state, action);
}
