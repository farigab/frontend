import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { switchMap, catchError, of } from 'rxjs';
import { BackendHealthService } from './services/backend-health.service';
import { AuthService } from './services/auth.service';
import { BackendLoadingComponent } from './components/backend-loading/backend-loading.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BackendLoadingComponent],
  template: `
    @if (!healthService.status().isAvailable) {
      <app-backend-loading />
    }

    @if (healthService.status().isAvailable) {
      <router-outlet />
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  protected readonly healthService = inject(BackendHealthService);
  private readonly authService = inject(AuthService);

  ngOnInit(): void {
    this.healthService.checkHealth().pipe(
      switchMap(() => {
        if (this.healthService.isHealthy()) {
          return this.authService.checkSession();
        }
        return of(false);
      }),
      catchError((error) => {
        return of(false);
      })
    ).subscribe({
      next: () => {
      },
      error: () => {
      }
    });
  }
}
