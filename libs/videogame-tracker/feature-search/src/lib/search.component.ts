import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Game, GameFacade } from '@videogame-tracker/videogame-tracker/domain';
import {
  debounceTime,
  distinctUntilChanged,
  Observable,
  startWith,
  switchMap,
  tap,
} from 'rxjs';

export interface GameGroup {
  letter: string;
  names: string[];
}

@Component({
  selector: 'videogame-tracker-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  gameList$: Observable<Game[]> | undefined;

  searchGamesForm = this.fb.group({
    search: [''],
  });

  loading: boolean | undefined;

  gameGroups: GameGroup[] = [];

  // gameGroupOptions: Observable<GameGroup[]>;

  constructor(
    private gameFacade: GameFacade,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    const debounceSearchInput$ = this.searchGamesForm.controls[
      'search'
    ].valueChanges.pipe(debounceTime(300));

    this.gameList$ = debounceSearchInput$.pipe(
      startWith(''),
      distinctUntilChanged(),
      tap(() => (this.loading = true)),
      switchMap((input) => this.loadGames(input)),
      tap(() => (this.loading = false)),
      tap((res) => this.buildGameGroups(res))
    );
  }

  private filterFirstLetters(games: Game[]): string[] {
    const firstLettersList = games.map((game) => {
      return game?.title?.charAt(0);
    });
    const filteredLettersList: string[] = [];
    for (const letter of firstLettersList) {
      if (!filteredLettersList.includes(letter)) {
        filteredLettersList.push(letter);
      }
    }
    return filteredLettersList.sort();
  }

  private buildGameGroups(games: Game[]): void {
    this.gameGroups = this.filterFirstLetters(games).map((letter) => {
      return {
        letter,
        names: games
          .filter((game) => game?.title?.charAt(0) === letter)
          .map((game) => game.title),
      };
    });
  }

  private loadGames(title = ''): Observable<Game[]> {
    return this.gameFacade.load(title);
  }

  goToCreateNewGame() {
    this.router.navigate(['/add']);
  }

  onCardChange(cards: Game[]) {
    // TODO: - Perform actions after a card is droped
  }
}
