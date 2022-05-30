import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { VideogameTrackerFeatureManageModule } from '@videogame-tracker/videogame-tracker/feature-manage';
import { VideogameTrackerFeatureSearchModule } from '@videogame-tracker/videogame-tracker/feature-search';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES),
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
