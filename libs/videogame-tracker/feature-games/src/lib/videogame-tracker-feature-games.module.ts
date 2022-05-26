import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideogameTrackerDomainModule } from '@videogame-tracker/videogame-tracker/domain';
import { GamesComponent } from './games.component';

@NgModule({
  imports: [CommonModule, VideogameTrackerDomainModule],
  declarations: [GamesComponent],
  exports: [GamesComponent],
})
export class VideogameTrackerFeatureGamesModule {}
