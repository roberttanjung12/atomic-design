import { startOfISOWeek, endOfISOWeek } from 'date-fns';
import type { DateValue } from '../types/date-value';

export function getWeekRange(date: Date | null): DateValue {
  if (!date) return [null, null];

  const startOfWeek = startOfISOWeek(date);
  const endOfWeek = endOfISOWeek(date);

  return [startOfWeek, endOfWeek];
}
