import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/search-games',
    pathMatch: 'full',
  },
  {
    path: 'search-games',
    loadChildren: () =>
      import('@videogame-tracker/videogame-tracker/feature-search').then(
        (m) => m.VideogameTrackerFeatureSearchModule
      ),
    // canActivate: [AuthGuard],
  },
  // {
  //   path: 'login',
  //   loadChildren: () =>
  //     import('login/Module').then((m) => m.RemoteEntryModule),
  // },
  {
    path: '**',
    redirectTo: 'home',
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
