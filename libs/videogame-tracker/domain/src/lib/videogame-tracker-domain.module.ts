import * as fromGame from './+state/game/game.reducer';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameEffects } from './+state/game/game.effects';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromGame.GAME_FEATURE_KEY, fromGame.reducer),
    EffectsModule.forFeature([GameEffects]),
  ],
})
export class VideogameTrackerDomainModule {}
