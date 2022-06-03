import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as AuthActions from './auth.actions';
import * as AuthSelectors from './auth.selectors';

@Injectable()
export class AuthFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(AuthSelectors.getAuthLoaded));
  activeUser$ = this.store.pipe(select(AuthSelectors.getAuthUser));
  selectedAuth$ = this.store.pipe(select(AuthSelectors.getSelected));

  constructor(private readonly store: Store) {}

  login(user: string, password: string): void {
    this.store.dispatch(AuthActions.login({ user, password }));
  }
}
