import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Game } from '../entities/game';

const baseUrl = 'http://localhost:3001/games';

@Injectable({ providedIn: 'root' })
export class GameDataService {
  constructor(private http: HttpClient) {}

  load(): Observable<Game[]> {
    // Uncomment if needed
    /*
        const url = '...';
        const params = new HttpParams().set('param', 'value');
        const headers = new HttpHeaders().set('Accept', 'application/json');
        */
    return this.http.get<Game[]>(baseUrl);
  }
}
