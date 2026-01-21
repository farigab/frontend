export interface Achievement {
  readonly id?: number;
  title: string;
  description: string;
  date: string;
  category: string;
}

export interface AchievementFormData {
  title: string;
  description: string;
  date: Date;
  category: string;
}

export interface AchievementCategory {
  readonly value: string;
  readonly label: string;
  readonly icon: string;
}

export const ACHIEVEMENT_CATEGORIES: readonly AchievementCategory[] = [
  { value: 'technical', label: 'Technical', icon: 'pi pi-code' },
  { value: 'leadership', label: 'Leadership', icon: 'pi pi-users' },
  { value: 'innovation', label: 'Innovation', icon: 'pi pi-lightbulb' },
  { value: 'collaboration', label: 'Collaboration', icon: 'pi pi-comments' },
  { value: 'learning', label: 'Learning', icon: 'pi pi-book' },
  { value: 'other', label: 'Other', icon: 'pi pi-star' }
] as const;

export type AchievementCategoryValue = typeof ACHIEVEMENT_CATEGORIES[number]['value'];
