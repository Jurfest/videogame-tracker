import { Routes } from '@angular/router';
import { AuthGuard } from '@videogame-tracker/shared/util-auth';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/games-catalog',
    pathMatch: 'full',
  },
  {
    path: 'games-catalog',
    loadChildren: () =>
      import('@videogame-tracker/videogame-tracker/feature-search').then(
        (m) => m.VideogameTrackerFeatureSearchModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'add',
    loadChildren: () =>
      import('@videogame-tracker/videogame-tracker/feature-manage').then(
        (m) => m.VideogameTrackerFeatureManageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('@videogame-tracker/videogame-tracker/feature-login').then(
        (m) => m.VideogameTrackerFeatureLoginModule
      ),
  },
  // {
  //   path: '**',
  //   redirectTo: '/games-catalog',
  // },
];
