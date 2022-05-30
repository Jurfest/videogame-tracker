import { ConsoleEntity } from '../../entities/console.models';
import {
  consoleAdapter,
  ConsolePartialState,
  initialState,
} from './console.reducer';
import * as ConsoleSelectors from './console.selectors';

describe('Console Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getConsoleId = (it: ConsoleEntity) => it.id;
  const createConsoleEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as ConsoleEntity);

  let state: ConsolePartialState;

  beforeEach(() => {
    state = {
      console: consoleAdapter.setAll(
        [
          createConsoleEntity('PRODUCT-AAA'),
          createConsoleEntity('PRODUCT-BBB'),
          createConsoleEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Console Selectors', () => {
    it('getAllConsole() should return the list of Console', () => {
      const results = ConsoleSelectors.getAllConsole(state);
      const selId = getConsoleId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = ConsoleSelectors.getSelected(state) as ConsoleEntity;
      const selId = getConsoleId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getConsoleLoaded() should return the current "loaded" status', () => {
      const result = ConsoleSelectors.getConsoleLoaded(state);

      expect(result).toBe(true);
    });

    it('getConsoleError() should return the current "error" state', () => {
      const result = ConsoleSelectors.getConsoleError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
