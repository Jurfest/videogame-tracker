import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as ConsoleActions from '../+state/console/console.actions';
import { ConsoleEffects } from '../+state/console/console.effects';
import { ConsoleFacade } from './console.facade';
import { ConsoleEntity } from '../entities/console.models';
import {
  CONSOLE_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from '../+state/console/console.reducer';
import * as ConsoleSelectors from '../+state/console/console.selectors';

interface TestSchema {
  console: State;
}

describe('ConsoleFacade', () => {
  let facade: ConsoleFacade;
  let store: Store<TestSchema>;
  const createConsoleEntity = (id: string, name = ''): ConsoleEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(CONSOLE_FEATURE_KEY, reducer),
          EffectsModule.forFeature([ConsoleEffects]),
        ],
        providers: [ConsoleFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(ConsoleFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    // it('loadAll() should return empty list with loaded == true', async () => {
    //   let list = await readFirst(facade.allConsole$);
    //   let isLoaded = await readFirst(facade.loaded$);

    //   expect(list.length).toBe(0);
    //   expect(isLoaded).toBe(false);

    //   facade.init();

    //   list = await readFirst(facade.allConsole$);
    //   isLoaded = await readFirst(facade.loaded$);

    //   expect(list.length).toBe(0);
    //   expect(isLoaded).toBe(true);
    // });

    /**
     * Use `loadConsoleSuccess` to manually update list
     */
    // it('allConsole$ should return the loaded list; and loaded flag == true', async () => {
    //   let list = await readFirst(facade.allConsole$);
    //   let isLoaded = await readFirst(facade.loaded$);

    //   expect(list.length).toBe(0);
    //   expect(isLoaded).toBe(false);

    //   store.dispatch(
    //     ConsoleActions.loadConsoleSuccess({
    //       console: [createConsoleEntity('AAA'), createConsoleEntity('BBB')],
    //     })
    //   );

    //   list = await readFirst(facade.allConsole$);
    //   isLoaded = await readFirst(facade.loaded$);

    //   expect(list.length).toBe(2);
    //   expect(isLoaded).toBe(true);
    // });
  });
});
