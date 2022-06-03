import { Routes } from '@angular/router';
import { LoginComponent } from '@videogame-tracker/login/feature-auth';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];
