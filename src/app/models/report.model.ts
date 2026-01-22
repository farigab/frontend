import { Achievement } from './achievement.model';

export interface SummaryReport {
  readonly total_achievements: number;
  readonly by_category: Record<string, number>;
  readonly categories_count: number;
  readonly earliest_date?: string;
  readonly latest_date?: string;
}

export interface CategoryReport {
  readonly total: number;
  readonly achievements_by_category: Record<string, Achievement[]>;
}

export interface PeriodReport {
  readonly start_date: string;
  readonly end_date: string;
  readonly total_achievements: number;
  readonly by_month: Record<string, number>;
  readonly by_category: Record<string, number>;
}

export interface TimelineReport {
  readonly total: number;
  readonly timeline: Record<string, Achievement[]>;
}

export interface AISummaryReport {
  readonly reportType: string;
  readonly totalAchievements: number;
  readonly aiGeneratedReport: string;
  readonly filtersApplied: {
    readonly category: string;
    readonly startDate: string | null;
    readonly endDate: string | null;
  };
}

export interface AIGitHubAnalysis {
  readonly totalGithubAchievements: number;
  readonly aiAnalysis: string;
  readonly statistics: Record<string, number>;
}

export interface ChartData {
  readonly labels: string[];
  readonly datasets: ChartDataset[];
}

export interface ChartDataset {
  readonly label: string;
  readonly data: number[];
  readonly backgroundColor?: string | string[];
  readonly borderColor?: string | string[];
  readonly borderWidth?: number;
}
