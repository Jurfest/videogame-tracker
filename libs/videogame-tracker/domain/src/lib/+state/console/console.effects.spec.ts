import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from 'jasmine-marbles'; // TODO: - Change for rxjs-marbles/jest
import { Observable } from 'rxjs';

import * as ConsoleActions from './console.actions';
import { ConsoleEffects } from './console.effects';

describe('ConsoleEffects', () => {
  let actions: Observable<Action>;
  let effects: ConsoleEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot(), HttpClientModule],
      providers: [
        ConsoleEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(ConsoleEffects);
  });

  describe('init$', () => {
    xit('should work', () => {
      actions = hot('-a-|', { a: ConsoleActions.loadConsoleList() });

      const expected = hot('-a-|', {
        a: ConsoleActions.loadConsoleListSuccess({ consoles: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
