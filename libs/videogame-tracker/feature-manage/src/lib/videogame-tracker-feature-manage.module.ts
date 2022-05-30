import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideogameTrackerDomainModule } from '@videogame-tracker/videogame-tracker/domain';
import { ManageComponent } from './manage.component';

@NgModule({
  imports: [CommonModule, VideogameTrackerDomainModule],
  declarations: [ManageComponent],
  exports: [ManageComponent],
})
export class VideogameTrackerFeatureManageModule {}
