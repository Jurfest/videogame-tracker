import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as GameActions from './game.actions';
import { GameDataService } from '../../infrastructure/game.data.service';

@Injectable()
export class GameEffects {
  loadGame$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GameActions.loadGame),
      switchMap((action) =>
        this.gameDataService.load().pipe(
          map((game) => GameActions.loadGameSuccess({ game })),
          catchError((error) => of(GameActions.loadGameFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private gameDataService: GameDataService
  ) {}
}
