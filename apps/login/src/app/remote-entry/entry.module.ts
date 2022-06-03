import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        loadChildren: () =>
          import('@videogame-tracker/login/feature-auth').then(
            (m) => m.LoginFeatureAuthModule
          ),
      },
    ]),
  ],
  providers: [],
})
export class RemoteEntryModule {}
