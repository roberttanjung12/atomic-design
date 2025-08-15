import { format } from 'date-fns';
import type { DateValue } from '../types/date-value';
import type { Locale } from '../types/locale';

const formatValue = (dateRange: [DateValue, DateValue], locale: Locale) => {
  if (dateRange.every(date => date)) {
    return `${format(dateRange[0] || '', 'dd MMM yyyy', { locale })} - ${format(dateRange[1] || '', 'dd MMM yyyy', { locale })}`;
  }

  return '';
};

export default formatValue;
