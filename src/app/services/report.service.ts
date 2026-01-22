import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { Achievement } from '../models/achievement.model';
import {
  AIGitHubAnalysis,
  AISummaryReport,
  CategoryReport,
  PeriodReport,
  SummaryReport,
  TimelineReport
} from '../models/report.model';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${environment.apiUrl}/reports`;

  // State management with signals
  private readonly summarySignal = signal<SummaryReport | null>(null);
  private readonly loadingSignal = signal<boolean>(false);
  private readonly errorSignal = signal<string | null>(null);

  readonly summary = this.summarySignal.asReadonly();
  readonly loading = this.loadingSignal.asReadonly();
  readonly error = this.errorSignal.asReadonly();

  getSummary(): Observable<SummaryReport> {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);

    return this.http.get<SummaryReport>(`${this.apiUrl}/summary`).pipe(
      tap({
        next: (data) => {
          this.summarySignal.set(data);
          this.loadingSignal.set(false);
        },
        error: (err) => {
          this.errorSignal.set(err.message);
          this.loadingSignal.set(false);
        }
      })
    );
  }

  getByCategory(category?: string): Observable<CategoryReport> {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);

    let params = new HttpParams();
    if (category) {
      params = params.set('category', category);
    }
    return this.http.get<CategoryReport>(`${this.apiUrl}/by-category`, { params }).pipe(
      tap({
        next: () => this.loadingSignal.set(false),
        error: (err) => {
          this.errorSignal.set(err.message);
          this.loadingSignal.set(false);
        }
      })
    );
  }

  getByPeriod(startDate: string, endDate: string): Observable<PeriodReport> {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);

    const params = new HttpParams()
      .set('startDate', startDate)
      .set('endDate', endDate);
    return this.http.get<PeriodReport>(`${this.apiUrl}/by-period`, { params }).pipe(
      tap({
        next: () => this.loadingSignal.set(false),
        error: (err) => {
          this.errorSignal.set(err.message);
          this.loadingSignal.set(false);
        }
      })
    );
  }

  getTimeline(): Observable<TimelineReport> {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);

    return this.http.get<TimelineReport>(`${this.apiUrl}/timeline`).pipe(
      tap({
        next: () => this.loadingSignal.set(false),
        error: (err) => {
          this.errorSignal.set(err.message);
          this.loadingSignal.set(false);
        }
      })
    );
  }

  exportAll(): Observable<Achievement[]> {
    return this.http.get<Achievement[]>(`${this.apiUrl}/export`);
  }

  getAISummary(
    reportType: string = 'executive',
    category?: string,
    startDate?: string,
    endDate?: string
  ): Observable<AISummaryReport> {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);

    let params = new HttpParams().set('reportType', reportType);

    if (category) {
      params = params.set('category', category);
    }
    if (startDate) {
      params = params.set('startDate', startDate);
    }
    if (endDate) {
      params = params.set('endDate', endDate);
    }

    return this.http.get<AISummaryReport>(`${this.apiUrl}/ai-summary`, { params }).pipe(
      tap({
        next: () => this.loadingSignal.set(false),
        error: (err) => {
          this.errorSignal.set(err.message);
          this.loadingSignal.set(false);
        }
      })
    );
  }

  getAIGitHubAnalysis(): Observable<AIGitHubAnalysis> {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);

    return this.http.get<AIGitHubAnalysis>(`${this.apiUrl}/ai-github-analysis`).pipe(
      tap({
        next: () => this.loadingSignal.set(false),
        error: (err) => {
          this.errorSignal.set(err.message);
          this.loadingSignal.set(false);
        }
      })
    );
  }
}
