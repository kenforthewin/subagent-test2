import { format, differenceInYears, isToday as isTodayFns, isSameDay as isSameDayFns } from 'date-fns';

/**
 * Calculate the current age in years based on birth date
 */
export function getAge(birthDate: Date): number {
  return differenceInYears(new Date(), birthDate);
}

/**
 * Get an array of all years lived from birth year to current year
 */
export function getYearsLived(birthDate: Date): number[] {
  const birthYear = birthDate.getFullYear();
  const currentYear = new Date().getFullYear();
  const years: number[] = [];
  
  for (let year = birthYear; year <= currentYear; year++) {
    years.push(year);
  }
  
  return years;
}

/**
 * Format a date using the format string
 * Wrapper around date-fns format function
 */
export function formatDate(date: Date, formatStr: string): string {
  return format(date, formatStr);
}

/**
 * Check if a date is today
 */
export function isToday(date: Date): boolean {
  return isTodayFns(date);
}

/**
 * Check if two dates are the same day
 */
export function isSameDay(date1: Date, date2: Date): boolean {
  return isSameDayFns(date1, date2);
}

