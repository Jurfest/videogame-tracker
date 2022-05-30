import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  Game,
  SearchFacade,
} from '@videogame-tracker/videogame-tracker/domain';
import { debounceTime, distinctUntilChanged, filter, map, tap } from 'rxjs';

@Component({
  selector: 'videogame-tracker-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  gameList$ = this.searchFacade.gameList$;

  searchGamesForm: FormGroup;

  loading: boolean | undefined;

  constructor(private searchFacade: SearchFacade, private fb: FormBuilder) {
    this.searchGamesForm = this.fb.group({
      search: [''],
    });
  }

  ngOnInit() {
    this.loadAllGames();

    const debounceSearchInput$ =
      this.searchGamesForm.controls['search'].valueChanges.pipe(
        filter((criteria) => criteria.length >= 2),
        debounceTime(300)
      );

    debounceSearchInput$.pipe(
      distinctUntilChanged(),
      tap(() => (this.loading = true)),
      map((input) => this.searchGames(input)),
      tap(() => (this.loading = false))
    ).subscribe();
  }

  loadAllGames(): void {
    this.searchFacade.load();
  }

  private searchGames(title: string): void {
    this.searchFacade.search(title);
  }

  onCardChange(cards: Game[]) {
    console.log(cards);
  }
}
