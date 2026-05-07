import { inject, Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private cookieService: CookieService = inject(CookieService);

  setToken(token: string): void {
    this.cookieService.set('authToken', token);
  }

  getToken(): string | null {
    return this.cookieService.get('authToken');
  }

  clearToken(): void {
    this.cookieService.delete('authToken');
  }
}
