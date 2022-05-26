import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { CardListComponent } from './components/card-list/card-list.component';

@NgModule({
  imports: [CommonModule, MatCardModule],
  declarations: [CardListComponent],
  exports: [CardListComponent],
})
export class SharedUiComponentsModule {}
