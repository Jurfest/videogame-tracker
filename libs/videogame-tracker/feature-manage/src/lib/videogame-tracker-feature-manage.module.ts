import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { SharedUiComponentsModule } from '@videogame-tracker/shared/ui-components';
import { VideogameTrackerDomainModule } from '@videogame-tracker/videogame-tracker/domain';
import { NgxMaskModule } from 'ngx-mask';

import { ManageComponent } from './manage.component';

@NgModule({
  imports: [
    CommonModule,
    VideogameTrackerDomainModule,
    ReactiveFormsModule,
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
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    NgxMaskModule.forRoot(),
    SharedUiComponentsModule,
    RouterModule.forChild([
      {
        path: '',
        component: ManageComponent,
      },
    ]),
  ],
  declarations: [ManageComponent],
  exports: [ManageComponent],
})
export class VideogameTrackerFeatureManageModule {}
