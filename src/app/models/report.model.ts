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

export interface GitHubStats {
  readonly total_github_achievements: number;
  readonly pull_requests: number;
  readonly issues: number;
  readonly commits: number;
  readonly repositories: number;
  readonly by_type: Record<string, number>;
}

export interface AISummaryReport {
  readonly report_type: string;
  readonly total_achievements: number;
  readonly ai_generated_report: string;
  readonly filters_applied: {
    readonly category: string;
    readonly start_date: string | null;
    readonly end_date: string | null;
  };
}

export interface AIGitHubAnalysis {
  readonly total_github_achievements: number;
  readonly ai_analysis: string;
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
