import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AuthEffects } from './+state/auth.effects';
import { AuthFacade } from './+state/auth.facade';
import * as fromAuth from './+state/auth.reducer';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';

@NgModule({
  imports: [
    CommonModule,
    MatSnackBarModule,
    StoreModule.forFeature(fromAuth.AUTH_FEATURE_KEY, fromAuth.reducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
  providers: [
    AuthFacade,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
})
export class SharedUtilAuthModule {}
