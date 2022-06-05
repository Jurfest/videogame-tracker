import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthEntity } from '../+state/auth.models';

// TODO: - Create global environment
const baseUrl = 'http://localhost:3001';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  fakeLogin(user: string, password: string): Observable<AuthEntity> {
    const params = new HttpParams()
      .set('user', user)
      .set('password', password);

    return this.http.get<AuthEntity>(`${baseUrl}/login`, { params });
  }

  fakeLogout(userId: string): Observable<{ userId: string }> {
    return this.http.post<{ userId: string }>(`${baseUrl}/revokeToken`, {
      userId,
    });
  }
}
