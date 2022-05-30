import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CONSOLE_FEATURE_KEY, State, consoleAdapter } from './console.reducer';

// Lookup the 'Console' feature state managed by NgRx
export const getConsoleState =
  createFeatureSelector<State>(CONSOLE_FEATURE_KEY);

const { selectAll, selectEntities } = consoleAdapter.getSelectors();

export const getConsoleLoaded = createSelector(
  getConsoleState,
  (state: State) => state.loaded
);

export const getConsoleError = createSelector(
  getConsoleState,
  (state: State) => state.error
);

export const getAllConsole = createSelector(getConsoleState, (state: State) =>
  selectAll(state)
);

export const getConsoleEntities = createSelector(
  getConsoleState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getConsoleState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getConsoleEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
