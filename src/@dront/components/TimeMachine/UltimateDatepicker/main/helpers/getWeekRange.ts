import moment from 'moment';
import type { DateValue } from '../types/date-value';

export function getWeekRange(date: Date | null): DateValue {
  if (!date) return [null, null];

  const startOfWeek = moment(date).startOf('isoWeek');
  const endOfWeek = moment(date).endOf('isoWeek');

  return [startOfWeek.toDate(), endOfWeek.toDate()];
}
