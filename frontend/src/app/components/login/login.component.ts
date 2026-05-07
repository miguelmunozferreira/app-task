import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private userService: UserService = inject(UserService);
  private tokenService: TokenService = inject(TokenService);
  private router: Router = inject(Router);
  email: string = '';
  password: string = '';

  login(): void {
    this.userService.login(this.email, this.password).subscribe({
      next: (token) => {
        this.tokenService.setToken(token);
        this.router.navigate(['/home']);
      },
      error: (error) => console.log('Error ' + error),
    });
  }
}
