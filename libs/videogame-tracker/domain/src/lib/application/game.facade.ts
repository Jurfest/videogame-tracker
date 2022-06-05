import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { createGame, loadGames } from '../+state/game/game.actions';
import * as fromGame from '../+state/game/game.reducer';
import * as GameSelectors from '../+state/game/game.selectors';
import { Game } from '../entities/game';

@Injectable({ providedIn: 'root' })
export class GameFacade {
  loaded$ = this.store.pipe(select(GameSelectors.getGameLoaded));
  gameList$ = this.store.pipe(select(GameSelectors.getAllGame));
  selectedGame$ = this.store.pipe(select(GameSelectors.getSelected));

  constructor(private store: Store<fromGame.GamePartialState>) {}

  load(title: string): Observable<Game[]> {
     this.store.dispatch(loadGames({ title }));
     return this.gameList$;
  }

  create(game: Game): void {
    this.store.dispatch(createGame({ game }));
  }
}
