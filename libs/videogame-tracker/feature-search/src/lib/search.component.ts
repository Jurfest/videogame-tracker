import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Game, GameFacade } from '@videogame-tracker/videogame-tracker/domain';
import { debounceTime, distinctUntilChanged, map, tap } from 'rxjs';

@Component({
  selector: 'videogame-tracker-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  gameList$ = this.gameFacade.gameList$;

  searchGamesForm: FormGroup;

  loading: boolean | undefined;

  constructor(private gameFacade: GameFacade, private fb: FormBuilder) {
    this.searchGamesForm = this.fb.group({
      search: [''],
    });
  }

  ngOnInit() {
    this.loadGames();

    const debounceSearchInput$ = this.searchGamesForm.controls[
      'search'
    ].valueChanges.pipe(
      // filter((criteria) => criteria.length >= 2),
      debounceTime(300)
    );

    debounceSearchInput$.pipe(
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

  onCardChange(cards: Game[]) {
    console.log(cards);
  }
}
