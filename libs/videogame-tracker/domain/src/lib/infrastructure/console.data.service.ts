import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ConsoleEntity } from '../entities/console.models';

const baseUrl = 'http://localhost:3001/consoles';

@Injectable({
  providedIn: 'root',
})
export class ConsoleDataService {
  constructor(private http: HttpClient) {}

  load(): Observable<ConsoleEntity[]> {
    return this.http.get<ConsoleEntity[]>(baseUrl);
  }
}
