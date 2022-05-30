import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { VideogameTrackerDomainModule } from '@videogame-tracker/videogame-tracker/domain';

import { ManageComponent } from './manage.component';

@NgModule({
  imports: [CommonModule, VideogameTrackerDomainModule, ReactiveFormsModule],
  declarations: [ManageComponent],
  exports: [ManageComponent],
})
export class VideogameTrackerFeatureManageModule {}
