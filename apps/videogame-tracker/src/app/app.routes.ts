import { Routes } from '@angular/router';
import { SearchComponent } from '@videogame-tracker/videogame-tracker/feature-search';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'videogames',
    pathMatch: 'full',
  },
  {
    path: 'videogames',
    component: SearchComponent,
  },
];
