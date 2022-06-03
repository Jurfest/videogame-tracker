import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginDomainModule } from '@videogame-tracker/login/domain';
import { SharedUtilAuthModule } from '@videogame-tracker/shared/util-auth';

import { AuthComponent } from './auth.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

@NgModule({
  imports: [CommonModule, LoginDomainModule, SharedUtilAuthModule],
  declarations: [AuthComponent, LoginFormComponent],
  exports: [AuthComponent],
})
export class LoginFeatureAuthModule {}
