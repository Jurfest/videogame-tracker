import { Routes } from '@angular/router';
import { GamesComponent } from '@videogame-tracker/videogame-tracker/feature-games';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'videogames',
    pathMatch: 'full',
  },
  {
    path: 'videogames',
    component: GamesComponent,
  },
];
