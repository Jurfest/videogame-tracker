import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Game } from '../entities/game';

@Injectable({ providedIn: 'root' })
export class GameDataService {
  constructor(private http: HttpClient) {}

  load(): Observable<Game[]> {
    // Uncomment if needed
    /*
        const url = '...';
        const params = new HttpParams().set('param', 'value');
        const headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.get<Game[]>(url, {params, headers});
        */

    return of([
      {
        id: 1,
        title: 'Lorem ipsum',
        year: 'Lorem ipsum dolor sit amet',
        console: 'Sed ut perspiciatis',
        completed: true,
        dateOfCompletion: 'Quis autem vel',
        personalNotes:
          'At vero eos et accusamus et iusto odio dignissimos ducimus qui',
      },
      {
        id: 2,
        title: 'At vero eos',
        year: 'At vero eos et accusam et justo duo dolores',
        console: 'Sed ut perspiciatis',
        completed: true,
        dateOfCompletion: 'Quis autem vel',
        personalNotes:
          'At vero eos et accusamus et iusto odio dignissimos ducimus qui',
      },
      {
        id: 3,
        title: 'Duis autem',
        year: 'Duis autem vel eum iriure dolor in hendrerit',
        console: 'Sed ut perspiciatis',
        completed: true,
        dateOfCompletion: 'Quis autem vel',
        personalNotes:
          'At vero eos et accusamus et iusto odio dignissimos ducimus qui',
      },
    ]);
  }
}
