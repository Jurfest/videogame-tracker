import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideogameTrackerDomainModule } from '@videogame-tracker/videogame-tracker/domain';
import { SearchComponent } from './search.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SharedUiComponentsModule } from '@videogame-tracker/shared/ui-components';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    VideogameTrackerDomainModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatTableModule,
    MatSelectModule,
    SharedUiComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [SearchComponent],
  exports: [SearchComponent],
})
export class VideogameTrackerFeatureSearchModule {}
