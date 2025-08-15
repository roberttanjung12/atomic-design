import moment from 'moment';
import type { DateValue } from '../types/date-value';
import type { Locale } from '../types/locale';

const formatValue = (dateRange: DateValue, locale: Locale) => {
  if (dateRange.every(date => date)) {
    return `${moment(dateRange[0]).locale(locale).format('HH:mm')} - ${moment(dateRange[1]).locale(locale).format('HH:mm')}`;
  }

  return '';
};

export default formatValue;
