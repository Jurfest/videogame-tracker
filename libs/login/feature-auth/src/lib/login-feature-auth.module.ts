import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { LoginDomainModule } from '@videogame-tracker/login/domain';
import { SharedUtilAuthModule } from '@videogame-tracker/shared/util-auth';

import { LoginComponent } from './components/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    LoginDomainModule,
    SharedUtilAuthModule,
    MatButtonModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoginComponent,
      },
    ]),
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent],
})
export class LoginFeatureAuthModule {}
