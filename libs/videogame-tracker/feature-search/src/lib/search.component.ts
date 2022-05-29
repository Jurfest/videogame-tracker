import { Component, OnInit } from '@angular/core';
import { Game, GamesFacade } from '@videogame-tracker/videogame-tracker/domain';

@Component({
  selector: 'videogame-tracker-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  gameList$ = this.gamesFacade.gameList$;

  constructor(private gamesFacade: GamesFacade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.gamesFacade.load();
  }

  onCardChange(cards: Game[]) {
    console.log(cards);
  }
}
