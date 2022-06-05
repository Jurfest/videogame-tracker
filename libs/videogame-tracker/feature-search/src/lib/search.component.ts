import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Game, GameFacade } from '@videogame-tracker/videogame-tracker/domain';
import { debounceTime, distinctUntilChanged, map, Observable, startWith, switchMap, tap } from 'rxjs';

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

  constructor(
    private gameFacade: GameFacade,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadGames();

    const debounceSearchInput$ = this.searchGamesForm.controls[
      'search'
    ].valueChanges.pipe(
      debounceTime(300)
    );

    this.gameList$ = debounceSearchInput$.pipe(
      startWith(''),
      distinctUntilChanged(),
      tap(() => (this.loading = true)),
      switchMap((input) => this.loadGames(input)),
      tap(() => (this.loading = false))
    );
  }

  loadGames(title = ''): Observable<Game[]> {
    return this.gameFacade.load(title);
  }

  goToCreateNewGame() {
    this.router.navigate(['/add']);
  }

  onCardChange(cards: Game[]) {
    // TODO: - Perform actions after a card is droped
  }
}
