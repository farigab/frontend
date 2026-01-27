import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { catchError, delay, tap, switchMap, of, Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface BackendStatus {
  readonly isAvailable: boolean;
  readonly isWarming: boolean;
  readonly lastCheck: Date;
  readonly failedAttempts: number;
}

@Injectable({ providedIn: 'root' })
export class BackendHealthService {
  private readonly http = inject(HttpClient);
  private readonly healthUrl = `${environment.apiUrl}/health`;

  readonly MAX_RETRY_ATTEMPTS = 20;
  private readonly RETRY_DELAY_MS = 3000;
  private readonly HIBERNATION_ERROR_CODES = [503, 504, 502, 0];

  readonly status = signal<BackendStatus>({
    isAvailable: false,
    isWarming: false,
    lastCheck: new Date(),
    failedAttempts: 0
  });

  checkHealth(): Observable<void> {
    this.updateStatus({ isWarming: true, failedAttempts: 0 });
    return this.attemptHealthCheck(0);
  }

  private attemptHealthCheck(attemptNumber: number): Observable<void> {
    return this.http.get<{ status: string }>(this.healthUrl, {
      headers: { 'X-Health-Check': 'true' }
    }).pipe(
      tap(() => {
        this.updateStatus({
          isAvailable: true,
          isWarming: false,
          lastCheck: new Date(),
          failedAttempts: 0
        });
      }),
      switchMap(() => of(void 0)),
      catchError((error) => {
        const status = error?.status ?? 0;
        const newAttemptNumber = attemptNumber + 1;

        this.updateStatus({
          isWarming: true,
          failedAttempts: newAttemptNumber,
          lastCheck: new Date()
        });

        if (newAttemptNumber < this.MAX_RETRY_ATTEMPTS &&
          this.HIBERNATION_ERROR_CODES.includes(status)) {
          return of(null).pipe(
            delay(this.RETRY_DELAY_MS),
            tap(() => console.log('[Health Check] Retrying now...')),
            switchMap(() => this.attemptHealthCheck(newAttemptNumber))
          );
        }

        console.log('[Health Check] Max attempts reached. Giving up.');
        this.updateStatus({
          isAvailable: false,
          isWarming: false,
          lastCheck: new Date(),
          failedAttempts: newAttemptNumber
        });

        return of(void 0);
      })
    );
  }

  reset(): void {
    this.status.set({
      isAvailable: false,
      isWarming: false,
      lastCheck: new Date(),
      failedAttempts: 0
    });
  }

  private updateStatus(partial: Partial<BackendStatus>): void {
    this.status.update(current => ({
      ...current,
      ...partial
    }));
  }
}
