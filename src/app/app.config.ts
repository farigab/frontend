import './polyfills';
import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi, HTTP_INTERCEPTORS } from '@angular/common/http';
import { provideZoneChangeDetection } from '@angular/core';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';

import { routes } from './app.routes';
import { CredentialsInterceptor } from './interceptors/credentials.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),

    provideRouter(
      routes,
      withComponentInputBinding(),
      withViewTransitions(),
    ),

    { provide: HTTP_INTERCEPTORS, useClass: CredentialsInterceptor, multi: true },
    provideHttpClient(withInterceptorsFromDi()),

    providePrimeNG({
      theme: {
        preset: Aura,
        options: { darkModeSelector: 'none' }
      }
    })
  ]
};
