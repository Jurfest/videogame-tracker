import { Component, OnInit } from '@angular/core';
import { Game, SearchFacade } from '@videogame-tracker/videogame-tracker/domain';

@Component({
  selector: 'videogame-tracker-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  gameList$ = this.searchFacade.gameList$;

  constructor(private searchFacade: SearchFacade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.searchFacade.load();
  }

  search(title: string): void {
    this.searchFacade.search(title);
  }

  onCardChange(cards: Game[]) {
    console.log(cards);
  }
}
