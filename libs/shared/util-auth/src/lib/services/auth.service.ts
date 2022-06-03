import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthEntity } from '../+state/auth.models';

const baseUrl = 'http://localhost:3001/login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  fakeLogin(user: string, password: string): Observable<AuthEntity> {
    const params = new HttpParams()
      .set('title', user)
      .set('password', password);

    return this.http.get<AuthEntity>(baseUrl, { params });
  }
}
