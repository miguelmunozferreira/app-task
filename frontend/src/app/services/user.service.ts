import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private http: HttpClient = inject(HttpClient);
  private url: string = environment.apiUrl + 'auth/';

  login(email: string, password: string): Observable<string> {
    const params = {
      email,
      password,
    };
    return this.http
      .post<{ token: string; user: User }>(this.url + 'login', params)
      .pipe(map((response) => response.token));
  }

  register(email: string, password: string, name: string): Observable<string> {
    const params = {
      email,
      password,
      name,
    };
    return this.http.post<string>(environment.apiUrl, params);
  }
}
