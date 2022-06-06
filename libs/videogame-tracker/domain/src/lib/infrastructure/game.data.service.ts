import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';

import { Game } from '../entities/game';

const baseUrl = 'http://localhost:3001/games';

@Injectable({ providedIn: 'root' })
export class GameDataService {
  constructor(private http: HttpClient) {}

  private sortCardsDesc(games: Game[]): Game[] {
    return games.sort((a: Game, b: Game) =>
      moment(b.dateOfCompletion, 'MM/DD/YYYY').diff(
        moment(a.dateOfCompletion, 'MM/DD/YYYY')
      )
    );
  }

  private insertCalcAgeInGame(games: Game[]): Game[] {
    return games.map((game) => {
      return { ...game, age: Number(moment().get('y')) - Number(game.year) };
    });
  }

  loadGames(searchParam: string): Observable<Game[]> {
    const params = new HttpParams().set('_sort', 'year').set('_order', 'desc');

    return this.http.get<Game[]>(baseUrl, { params }).pipe(
      map((res) =>
        res.filter(
          (game) =>
            game.title.toLowerCase().includes(searchParam.toLowerCase()) ||
            game.year.includes(searchParam) ||
            game.dateOfCompletion.includes(searchParam)
        )
      ),
      map((filteredGames) => this.sortCardsDesc(filteredGames)),
      map((sortedGames) => this.insertCalcAgeInGame(sortedGames))
    );
  }

  create(game: Game): Observable<Game> {
    return this.http.post<Game>(baseUrl, game);
  }
}
