import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      // {
      //   path: '',
      //   redirectTo: 'videogames',
      //   pathMatch: 'full',
      // },
      {
        path: '',
        loadChildren: () =>
          import('@videogame-tracker/videogame-tracker/feature-search').then(
            (m) => m.VideogameTrackerFeatureSearchModule
          ),
      },
      {
        path: 'add',
        loadChildren: () =>
          import('@videogame-tracker/videogame-tracker/feature-manage').then(
            (m) => m.VideogameTrackerFeatureManageModule
          ),
      },
    ]),
  ],
  providers: [],
})
export class RemoteEntryModule {}
