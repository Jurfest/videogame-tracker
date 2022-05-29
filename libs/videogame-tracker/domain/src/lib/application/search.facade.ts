import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { loadGame } from '../+state/game/game.actions';
import * as fromGame from '../+state/game/game.reducer';
import * as GameSelectors from '../+state/game/game.selectors';

@Injectable({ providedIn: 'root' })
export class SearchFacade {
  loaded$ = this.store.pipe(select(GameSelectors.getGameLoaded));
  gameList$ = this.store.pipe(select(GameSelectors.getAllGame));
  selectedGame$ = this.store.pipe(select(GameSelectors.getSelected));

  constructor(private store: Store<fromGame.GamePartialState>) {}

  load(): void {
    this.store.dispatch(loadGame());
  }

  search(title: string): void {
    console.log(title);
    //
  }
}
