import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { tap, map, catchError, of } from 'rxjs';
import { Router } from '@angular/router';

export interface AuthUser {
  readonly id: number;
  readonly login: string;
  readonly name: string;
  readonly avatar?: string;
  readonly email?: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {

  readonly user = signal<AuthUser | null>(null);
  readonly router = inject(Router);

  private http = inject(HttpClient);

  loginWithGithub(): void {
    const redirect = `${location.origin}/auth-callback`;
    window.location.href = `${environment.apiUrl}/auth/github?redirect=${encodeURIComponent(redirect)}`;
  }

  logout(): void {
    this.http
      .post(`${environment.apiUrl}/auth/logout`, {})
      .subscribe(() => {
        this.user.set(null);
        this.router.navigate(['/login']);
      });
  }


  loadUser() {
    return this.http
      .get<AuthUser>(`${environment.apiUrl}/user`, { withCredentials: true })
      .pipe(
        tap(user => this.user.set(user))
      );
  }
}
