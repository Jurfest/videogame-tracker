import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { GameDataService } from '../../infrastructure/game.data.service';
import * as GameActions from './game.actions';

@Injectable()
export class GameEffects {
  loadGame$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GameActions.loadGames),
      switchMap((action) =>
        this.gameDataService.loadGames(action.title).pipe(
          map((game) => GameActions.loadGamesSuccess({ game })),
          catchError((error) => of(GameActions.loadGamesFailure({ error })))
        )
      )
    )
  );

  createGame$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GameActions.createGame),
      switchMap((actions) =>
        this.gameDataService.create(actions.game).pipe(
          map((game) => GameActions.createGameSuccess({ game })),
          catchError((error) => of(GameActions.createGameFailure({ error })))
        )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private gameDataService: GameDataService
  ) {}
}
