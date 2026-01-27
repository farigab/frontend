import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { map, take } from 'rxjs';
import { BackendHealthService } from '../services/backend-health.service';

export const backendHealthGuard: CanActivateFn = () => {
  const healthService = inject(BackendHealthService);

  if (healthService.status().isAvailable) {
    return true;
  }

  return healthService.checkHealth().pipe(
    take(1),
    map(() => healthService.status().isAvailable)
  );
};
