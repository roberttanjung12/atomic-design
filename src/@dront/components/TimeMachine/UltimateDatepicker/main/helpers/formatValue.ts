import { format } from 'date-fns';
import type { DateValue } from '../types/date-value';
import type { Locale } from '../types/locale';

const formatValue = (dateRange: DateValue, locale: Locale) => {
  if (dateRange.some(date => date)) {
    return `${dateRange[0] ? format(dateRange[0], 'dd MMM yyyy', { locale }) : ''} - ${dateRange[1] ? format(dateRange[1], 'dd MMM yyyy', { locale }) : ''}`;
  }

  return '';
};

export default formatValue;
