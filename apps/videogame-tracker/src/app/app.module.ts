import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { VideogameTrackerFeatureLoginModule } from '@videogame-tracker/videogame-tracker/feature-login';
import { VideogameTrackerFeatureManageModule } from '@videogame-tracker/videogame-tracker/feature-manage';
import { VideogameTrackerFeatureSearchModule } from '@videogame-tracker/videogame-tracker/feature-search';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterModule.forRoot(APP_ROUTES, {
      preloadingStrategy: PreloadAllModules,
      errorHandler: (err) => {
        console.log('Router error: ', err);
      },
      initialNavigation: 'enabledBlocking',
    }),
    StoreModule.forRoot(
      {},
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    EffectsModule.forRoot(),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    VideogameTrackerFeatureSearchModule,
    VideogameTrackerFeatureManageModule,
    // SharedUtilAuthModule
    VideogameTrackerFeatureLoginModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
