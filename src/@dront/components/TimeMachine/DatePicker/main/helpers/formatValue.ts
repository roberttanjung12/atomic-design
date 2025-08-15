import { format } from 'date-fns';
import type { DateValue } from '../types/date-value';
import type { Locale } from '../types/locale';

const formatValue = (date: DateValue, locale: Locale, showTime?: boolean) => {
  if (!date) return '';

  if (showTime) return format(date, 'dd MMMM yyyy', { locale: locale });

  return format(date, 'dd MMMM yyyy', { locale: locale });
};

export default formatValue;
