import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  private tokenService = inject(TokenService);
  private router = inject(Router);

  logout(): void {
    this.tokenService.clearToken();
    this.router.navigate(['/login']);
  }
}
