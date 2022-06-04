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
  },
  // {
  //   path: 'login',
  //   loadChildren: () =>
  //     import('login/Module').then((m) => m.RemoteEntryModule),
  // },
  {
    path: '**',
    redirectTo: '/games-catalog',
  },
];

//   path: '',
//   loadChildren: () =>
//     import('@videogame-tracker/videogame-tracker/feature-search').then(
//       (m) => m.VideogameTrackerFeatureSearchModule
//     ),
// },
// {
//   path: 'add',
//   loadChildren: () =>
//     import('@videogame-tracker/videogame-tracker/feature-manage').then(
//       (m) => m.VideogameTrackerFeatureManageModule
//     ),
// },
