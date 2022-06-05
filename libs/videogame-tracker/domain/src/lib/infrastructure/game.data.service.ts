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

  loadGames(title: string): Observable<Game[]> {
    const params = new HttpParams().set('_sort', 'year').set('_order', 'desc');

    return this.http.get<Game[]>(baseUrl, { params }).pipe(
      map((res) =>
        res.filter((game) =>
          game.title.toLowerCase().includes(title.toLowerCase())
        )
      ),
      map((filteredGames) => this.sortCardsDesc(filteredGames)),
      map((sortedGames) => this.insertCalcAgeInGame(sortedGames))
    );
  }

  /**
   * NOTE: This method is not used. At the moment it just exemplifies a
   * call that filters through the backend
   */
  findGamesInServer(title: string): Observable<Game[]> {
    const params = new HttpParams().set('title', title);
    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http.get<Game[]>(baseUrl, { params, headers });
  }

  create(game: Game): Observable<Game> {
    return this.http.post<Game>(baseUrl, game);
  }
}
