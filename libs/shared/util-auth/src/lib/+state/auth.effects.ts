import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { map } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';
import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      fetch({
        run: (action) => {
          return this.authService
            .fakeLogin(action.user, action.password)
            .pipe(map((user) => AuthActions.loginSuccess({ auth: user })));
        },
        onError: (action, error) => {
          console.error('Error', error);
          return AuthActions.loginFailure({ error });
        },
      })
    )
  );

  loginSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loginSuccess),
      fetch({
        run: () => {
          this.router.navigate(['/games-catalog']);
          return;
        },
      })
    )
  );

  constructor(
    private readonly actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}
