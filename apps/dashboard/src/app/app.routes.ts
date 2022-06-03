import { Routes } from '@angular/router';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { AuthGuard } from '@videogame-tracker/shared/util-auth';

export const APP_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        loadChildren: () =>
          import('login/Module').then((m) => m.RemoteEntryModule),
        canActivate: [AuthGuard],
      },
    ],
  },
  // {
  //   path: '',
  //   redirectTo: '/tracker',
  //   pathMatch: 'full',
  // },
];
