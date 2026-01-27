import { Component, computed, inject } from '@angular/core';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ButtonModule } from 'primeng/button';
import { BackendHealthService } from '../../services/backend-health.service';

@Component({
  selector: 'app-backend-loading',
  standalone: true,
  imports: [ProgressSpinnerModule, ButtonModule],
  templateUrl: './backend-loading.component.html',
  styleUrls: ['./backend-loading.component.css']
})
export class BackendLoadingComponent {
  protected readonly healthService = inject(BackendHealthService);

  readonly maxAttempts = this.healthService.MAX_RETRY_ATTEMPTS;

  readonly attemptNumber = computed(() =>
    this.healthService.status().failedAttempts + 1
  );

  readonly progressPercentage = computed(() => {
    const attempts = this.attemptNumber();
    return Math.min((attempts / this.maxAttempts) * 100, 100);
  });

  readonly estimatedWaitTime = computed(() =>
    this.healthService.status().estimatedWaitTime
  );

  readonly elapsedTime = computed(() => {
    const lastCheck = this.healthService.status().lastCheck;
    return Math.floor((Date.now() - lastCheck.getTime()) / 1000);
  });

  readonly statusMessage = computed(() => {
    const attempt = this.attemptNumber();
    const isWarming = this.healthService.status().isWarming;
    const hasFailed = this.healthService.hasFailed();

    if (hasFailed) {
      return 'Connection Failed';
    }

    if (!isWarming) {
      return 'Checking server status...';
    }

    if (attempt <= 3) {
      return 'Waking up backend from hibernation...';
    } else if (attempt <= 10) {
      return 'Starting backend services...';
    } else if (attempt <= 15) {
      return 'Almost ready! Hang tight...';
    } else {
      return 'Taking longer than expected...';
    }
  });

  readonly showFreeTierNotice = computed(() =>
    this.healthService.status().isWarming && this.attemptNumber() > 5
  );

  readonly showWarning = computed(() =>
    this.attemptNumber() > 15 && !this.healthService.status().isAvailable
  );

  retry(): void {
    this.healthService.reset();
    this.healthService.checkHealth().subscribe();
  }
}
