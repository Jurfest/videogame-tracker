import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { GameEffects } from './+state/game/game.effects';
import * as fromGame from './+state/game/game.reducer';
import * as fromConsole from './+state/console/console.reducer';
import { ConsoleEffects } from './+state/console/console.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromGame.GAME_FEATURE_KEY, fromGame.reducer),
    EffectsModule.forFeature([GameEffects]),
    StoreModule.forFeature(
      fromConsole.CONSOLE_FEATURE_KEY,
      fromConsole.reducer
    ),
    EffectsModule.forFeature([ConsoleEffects]),
  ],
})
export class VideogameTrackerDomainModule {}
