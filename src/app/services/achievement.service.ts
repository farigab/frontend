import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { Achievement } from '../models/achievement.model';

@Injectable({
  providedIn: 'root'
})
export class AchievementService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${environment.apiUrl}/achievements`;

  // State management with signals
  private readonly achievementsSignal = signal<Achievement[]>([]);
  private readonly loadingSignal = signal<boolean>(false);
  private readonly errorSignal = signal<string | null>(null);

  readonly achievements = this.achievementsSignal.asReadonly();
  readonly loading = this.loadingSignal.asReadonly();
  readonly error = this.errorSignal.asReadonly();

  findAll(): Observable<Achievement[]> {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);

    return this.http.get<Achievement[]>(this.apiUrl).pipe(
      tap({
        next: (data) => {
          this.achievementsSignal.set(data);
          this.loadingSignal.set(false);
        },
        error: (err) => {
          this.errorSignal.set(err.message);
          this.loadingSignal.set(false);
        }
      })
    );
  }

  findById(id: number): Observable<Achievement> {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);

    return this.http.get<Achievement>(`${this.apiUrl}/${id}`).pipe(
      tap({
        next: () => this.loadingSignal.set(false),
        error: (err) => {
          this.errorSignal.set(err.message);
          this.loadingSignal.set(false);
        }
      })
    );
  }

  findByCategory(category: string): Observable<Achievement[]> {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);

    const params = new HttpParams().set('category', category);
    return this.http.get<Achievement[]>(`${this.apiUrl}/category`, { params }).pipe(
      tap({
        next: (data) => {
          this.achievementsSignal.set(data);
          this.loadingSignal.set(false);
        },
        error: (err) => {
          this.errorSignal.set(err.message);
          this.loadingSignal.set(false);
        }
      })
    );
  }

  findByDateRange(startDate: string, endDate: string): Observable<Achievement[]> {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);

    const params = new HttpParams()
      .set('startDate', startDate)
      .set('endDate', endDate);
    return this.http.get<Achievement[]>(`${this.apiUrl}/date-range`, { params }).pipe(
      tap({
        next: (data) => {
          this.achievementsSignal.set(data);
          this.loadingSignal.set(false);
        },
        error: (err) => {
          this.errorSignal.set(err.message);
          this.loadingSignal.set(false);
        }
      })
    );
  }

  create(achievement: Achievement): Observable<Achievement> {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);

    return this.http.post<Achievement>(this.apiUrl, achievement).pipe(
      tap({
        next: (newAchievement) => {
          this.achievementsSignal.update(current => [...current, newAchievement]);
          this.loadingSignal.set(false);
        },
        error: (err) => {
          this.errorSignal.set(err.message);
          this.loadingSignal.set(false);
        }
      })
    );
  }

  update(id: number, achievement: Achievement): Observable<Achievement> {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);

    return this.http.put<Achievement>(`${this.apiUrl}/${id}`, achievement).pipe(
      tap({
        next: (updatedAchievement) => {
          this.achievementsSignal.update(current =>
            current.map(a => a.id === id ? updatedAchievement : a)
          );
          this.loadingSignal.set(false);
        },
        error: (err) => {
          this.errorSignal.set(err.message);
          this.loadingSignal.set(false);
        }
      })
    );
  }

  delete(id: number): Observable<void> {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);

    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      tap({
        next: () => {
          this.achievementsSignal.update(current =>
            current.filter(a => a.id !== id)
          );
          this.loadingSignal.set(false);
        },
        error: (err) => {
          this.errorSignal.set(err.message);
          this.loadingSignal.set(false);
        }
      })
    );
  }
}
