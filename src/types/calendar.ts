export type CalendarView = 'day' | 'week' | 'month' | 'year' | 'lifetime';

export interface CalendarState {
  birthDate: Date | null;
  currentDate: Date;
  currentView: CalendarView;
}

