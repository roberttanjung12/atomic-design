import moment from 'moment';
import type { DateValue } from '../types/date-value';
import type { Locale } from '../types/locale';

const formatValue = (dateRange: DateValue, locale: Locale) => {
  if (dateRange.every(date => date)) {
    return `${moment(dateRange[0]).locale(locale).format('DD MMM YYYY')} - ${moment(dateRange[1]).locale(locale).format('DD MMM YYYY')}`;
  }

  return '';
};

export default formatValue;
