import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginDomainModule } from '@videogame-tracker/login/domain';
import { SharedUtilAuthModule } from '@videogame-tracker/shared/util-auth';

import { AuthComponent } from './auth.component';

@NgModule({
  imports: [CommonModule, LoginDomainModule, SharedUtilAuthModule],
  declarations: [AuthComponent],
  exports: [AuthComponent],
})
export class LoginFeatureAuthModule {}
