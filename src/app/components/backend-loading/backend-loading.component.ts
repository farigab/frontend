import { Component, computed, inject, OnDestroy, OnInit } from '@angular/core';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ButtonModule } from 'primeng/button';
import { BackendHealthService } from '../../services/backend-health.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-backend-loading',
  standalone: true,
  imports: [ProgressSpinnerModule, ButtonModule],
  templateUrl: './backend-loading.component.html',
  styleUrls: ['./backend-loading.component.css']
})
export class BackendLoadingComponent implements OnInit, OnDestroy {
  protected readonly healthService = inject(BackendHealthService);
  private subscription?: Subscription;

  readonly maxAttempts = this.healthService.MAX_RETRY_ATTEMPTS;

  readonly attemptNumber = computed(() =>
    this.healthService.status().failedAttempts + 1
  );

  readonly progressPercentage = computed(() => {
    const attempts = this.attemptNumber();
    return Math.min((attempts / this.maxAttempts) * 100, 100);
  });

  ngOnInit(): void {
    this.startHealthCheck();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  retry(): void {
    this.healthService.reset();
    this.startHealthCheck();
  }

  private startHealthCheck(): void {
    this.subscription?.unsubscribe();
    this.subscription = this.healthService.checkHealth().subscribe();
  }
}
