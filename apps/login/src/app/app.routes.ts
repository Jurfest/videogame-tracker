import { Routes } from '@angular/router';
import { AuthComponent } from '@videogame-tracker/login/feature-auth';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: AuthComponent,
  },
];
