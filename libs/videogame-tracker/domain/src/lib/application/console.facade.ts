import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as ConsoleActions from '../+state/console/console.actions';
import * as ConsoleFeature from '../+state/console/console.reducer';
import * as ConsoleSelectors from '../+state/console/console.selectors';

@Injectable({ providedIn: 'root' })
export class ConsoleFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(ConsoleSelectors.getConsoleLoaded));
  allConsole$ = this.store.pipe(select(ConsoleSelectors.getAllConsole));
  selectedConsole$ = this.store.pipe(select(ConsoleSelectors.getSelected));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  loadConsoleList() {
    this.store.dispatch(ConsoleActions.loadConsoleList());
  }
}
