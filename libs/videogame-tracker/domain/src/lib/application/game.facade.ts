import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { createGame, loadGame } from '../+state/game/game.actions';
import * as fromGame from '../+state/game/game.reducer';
import * as GameSelectors from '../+state/game/game.selectors';
import { Game } from '../entities/game';

@Injectable({ providedIn: 'root' })
export class GameFacade {
  loaded$ = this.store.pipe(select(GameSelectors.getGameLoaded));
  gameList$ = this.store.pipe(select(GameSelectors.getAllGame));
  selectedGame$ = this.store.pipe(select(GameSelectors.getSelected));

  constructor(private store: Store<fromGame.GamePartialState>) {}

  load(): void {
    this.store.dispatch(loadGame());
  }

  search(title: string): void {
    console.log('search', title);
  }

  create(game: Game): void {
    this.store.dispatch(createGame({ game }));
  }
}