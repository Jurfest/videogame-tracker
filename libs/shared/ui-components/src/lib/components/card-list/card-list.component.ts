import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Card } from '../../models/card';

@Component({
  selector: 'components-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent {
  @Input() cards: Card[] = [];
  @Output() cardChange = new EventEmitter<Card[]>();

  sortCards(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.cards, event.previousIndex, event.currentIndex);
    this.cardChange.emit(this.cards);
  }
}
