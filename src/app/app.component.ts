import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BackendHealthService } from './services/backend-health.service';
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
export class AppComponent {
  protected readonly healthService = inject(BackendHealthService);
}
