import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AuthEffects } from './+state/auth.effects';
import * as fromAuth from './+state/auth.reducer';

@NgModule({
  imports: [
    CommonModule,
    // StoreModule.forFeature(fromAuth.AUTH_FEATURE_KEY, fromAuth.reducer),
    // EffectsModule.forFeature([AuthEffects]),
  ],
  providers: [],
})
export class SharedUtilAuthModule {}
