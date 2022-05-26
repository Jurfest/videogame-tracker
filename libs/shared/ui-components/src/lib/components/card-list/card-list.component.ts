import { Component, Input } from '@angular/core';

import { Card } from '../../models/card';

@Component({
  selector: 'components-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent {
  @Input() cards: Card[] | null = [];
}
