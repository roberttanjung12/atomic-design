import { format } from 'date-fns';
import type { DateValue } from '../types/date-value';
import type { Locale } from '../types/locale';

const formatValue = (dateRange: DateValue, locale: Locale) => {
  if (dateRange.every(date => date)) {
    return `${format(dateRange[0] || '', 'HH:mm', { locale })} - ${format(dateRange[1] || '', 'HH:mm', { locale })}`;
  }

  return '';
};

export default formatValue;
