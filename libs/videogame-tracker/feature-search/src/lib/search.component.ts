import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Game, GameFacade } from '@videogame-tracker/videogame-tracker/domain';
import { debounceTime, distinctUntilChanged, map, tap } from 'rxjs';

@Component({
  selector: 'videogame-tracker-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  gameList$ = this.gameFacade.gameList$;

  searchGamesForm = this.fb.group({
    search: [''],
  });

  loading: boolean | undefined;

  constructor(
    private gameFacade: GameFacade,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadGames();

    const debounceSearchInput$ = this.searchGamesForm.controls[
      'search'
    ].valueChanges.pipe(
      // filter((criteria) => criteria.length >= 2),
      debounceTime(300)
    );

    debounceSearchInput$
      .pipe(
        distinctUntilChanged(),
        tap(() => (this.loading = true)),
        map((input) => this.loadGames(input)),
        tap(() => (this.loading = false))
      )
      .subscribe();
  }

  loadGames(title = ''): void {
    this.gameFacade.load(title);
  }

  goToCreateNewGame() {
    this.router.navigate(['/add']);
  }

  onCardChange(cards: Game[]) {
    // TODO: - Perform actions after a card is droped
  }
}
