import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, inject, provideAppInitializer, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router';
import { MessageService } from 'primeng/api';
import { providePrimeNG } from 'primeng/config';
import './polyfills';

import { catchError, filter, of, switchMap } from 'rxjs';
import { routes } from './app.routes';
import { CustomAuraPreset } from './aura‑preset';
import { authInterceptor } from './interceptors/auth.interceptor';
import { errorInterceptor } from './interceptors/error.interceptor';
import { AuthService } from './services/auth.service';
import { BackendHealthService } from './services/backend-health.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),

    provideRouter(
      routes,
      withComponentInputBinding(),
      withViewTransitions(),
    ),

    provideHttpClient(
      withInterceptors([
        authInterceptor,
        errorInterceptor
      ])
    ),

    providePrimeNG({
      theme: {
        preset: CustomAuraPreset,
      }
    }),
    provideAppInitializer(() => {
      const healthService = inject(BackendHealthService);
      const authService = inject(AuthService);

      return healthService.checkHealth().pipe(
        filter(() => healthService.status().isAvailable),
        switchMap(() => authService.checkSession()),
        catchError(() => of(false))
      );
    }),

    MessageService,
  ]
};
