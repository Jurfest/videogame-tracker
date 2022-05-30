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
      ofType(GameActions.loadGame),
      switchMap(() =>
        this.gameDataService.load().pipe(
          map((game) => GameActions.loadGameSuccess({ game })),
          catchError((error) => of(GameActions.loadGameFailure({ error })))
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
