import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as ConsoleActions from './console.actions';
import * as ConsoleFeature from './console.reducer';
import { ConsoleDataService } from '../../infrastructure/console.data.service';
import { map } from 'rxjs/operators';

@Injectable()
export class ConsoleEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ConsoleActions.loadConsoleList),
      fetch({
        run: () => {
          return this.consoleDataService
            .load()
            .pipe(
              map((consoles) =>
              ConsoleActions.loadConsoleListSuccess({ consoles })
              )
            );
        },
        onError: (action, error) => {
          console.error('Error', error);
          return ConsoleActions.loadConsoleListFailure({ error });
        },
      })
    )
  );

  constructor(
    private readonly actions$: Actions,
    private consoleDataService: ConsoleDataService
  ) {}
}
