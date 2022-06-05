import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AuthFacade, AuthGuard } from '@videogame-tracker/shared/util-auth';
import { VideogameTrackerFeatureSearchModule } from '@videogame-tracker/videogame-tracker/feature-search';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        RouterTestingModule.withRoutes(APP_ROUTES),
        VideogameTrackerFeatureSearchModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        HttpClientModule,
      ],
      providers: [
        {
          provide: AuthGuard,
          useValue: { canActivate: () => true },
        },
        {
          provide: AuthFacade,
          useVale: '',
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });
});
