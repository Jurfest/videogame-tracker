import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { CardListComponent } from './components/card-list/card-list.component';

@NgModule({
  imports: [CommonModule, MatCardModule, DragDropModule],
  declarations: [CardListComponent],
  exports: [CardListComponent],
})
export class SharedUiComponentsModule {}
