import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { GithubImportService } from '../../services/github-import.service';

@Component({
  selector: 'app-github-import',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    InputNumberModule,
    ToastModule
  ],
  templateUrl: './github-import.component.html',
  styleUrls: ['./github-import.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'class': 'github-import-page' }
})
export class GithubImportComponent {
  private readonly service = inject(GithubImportService);

  protected readonly repository = signal('');
  protected readonly token = signal('');
  protected readonly minChanges = signal(1);
  protected readonly result = signal<any | null>(null);
  protected readonly loading = signal(false);
  protected _repo = '';
  protected _token = '';
  protected _minChanges = 1;

  protected async getUsername(): Promise<void> {
    this.loading.set(true);
    this.service.getUsername(this._token || undefined).subscribe({
      next: (res) => {
        this.result.set(res);
        this.loading.set(false);
      },
      error: (err) => {
        this.result.set({ error: err.message || err });
        this.loading.set(false);
      }
    });
  }

  protected importPullRequests(): void {
    this.loading.set(true);
    this.service.importPullRequests(this._repo, this._token || undefined).subscribe({
      next: (res) => { this.result.set(res); this.loading.set(false); },
      error: (err) => { this.result.set({ error: err.message || err }); this.loading.set(false); }
    });
  }

  protected importIssues(): void {
    this.loading.set(true);
    this.service.importIssues(this._repo, this._token || undefined).subscribe({
      next: (res) => { this.result.set(res); this.loading.set(false); },
      error: (err) => { this.result.set({ error: err.message || err }); this.loading.set(false); }
    });
  }

  protected importCommits(): void {
    this.loading.set(true);
    this.service.importCommits(this._repo || undefined, Number(this._minChanges) || 1, this._token || undefined).subscribe({
      next: (res) => { this.result.set(res); this.loading.set(false); },
      error: (err) => { this.result.set({ error: err.message || err }); this.loading.set(false); }
    });
  }

  protected importRepositories(): void {
    this.loading.set(true);
    this.service.importRepositories(this._token || undefined).subscribe({
      next: (res) => { this.result.set(res); this.loading.set(false); },
      error: (err) => { this.result.set({ error: err.message || err }); this.loading.set(false); }
    });
  }
}
