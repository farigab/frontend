import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ButtonModule, CardModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'class': 'login-component' }
})
export class LoginComponent implements OnInit {
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);

  constructor() {
    effect(() => {
      const user = this.auth.user();
      if (user) {
        console.log('[Login] User authenticated, redirecting to home');
        this.router.navigate([''], { replaceUrl: true });
      }
    });
  }

  ngOnInit() {
    if (this.auth.user()) {
      this.router.navigate([''], { replaceUrl: true });
    }
  }

  login() {
    this.auth.loginWithGithub();
  }
}
