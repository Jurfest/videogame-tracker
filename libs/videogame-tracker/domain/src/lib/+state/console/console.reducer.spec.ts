import { Action } from '@ngrx/store';

import * as ConsoleActions from './console.actions';
import { ConsoleEntity } from '../../entities/console.models';
import { State, initialState, reducer } from './console.reducer';

describe('Console Reducer', () => {
  const createConsoleEntity = (id: string, name = ''): ConsoleEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Console actions', () => {
    it('loadConsoleSuccess should return the list of known Console', () => {
      const consoles = [
        createConsoleEntity('PRODUCT-AAA'),
        createConsoleEntity('PRODUCT-zzz'),
      ];
      const action = ConsoleActions.loadConsoleListSuccess({ consoles });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
