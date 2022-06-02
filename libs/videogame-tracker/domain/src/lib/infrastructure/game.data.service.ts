import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Game } from '../entities/game';

const baseUrl = 'http://localhost:3001/games';

@Injectable({ providedIn: 'root' })
export class GameDataService {
  constructor(private http: HttpClient) {}

  loadGames(title: string): Observable<Game[]> {
    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http
      .get<Game[]>(baseUrl, { headers })
      .pipe(
        map((res) =>
          res.filter((game) =>
            game.title.toLowerCase().includes(title.toLowerCase())
          )
        )
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
