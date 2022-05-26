import { Component, OnInit } from '@angular/core';
import { GamesFacade } from '@videogame-tracker/videogame-tracker/domain';

@Component({
  selector: 'videogame-tracker-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit {
  gameList$ = this.gamesFacade.gameList$;

  constructor(private gamesFacade: GamesFacade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.gamesFacade.load();
  }
}
