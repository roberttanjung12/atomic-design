import moment from 'moment';
import type { DateValue } from '../types/date-value';
import type { Locale } from '../types/locale';

const formatValue = (date: DateValue, locale: Locale, showTime?: boolean) => {
  if (!date) return '';

  if (showTime) return moment(date).format('DD MMMM YYYY HH:mm');

  return moment(date).locale(locale).format('DD MMMM YYYY');
};

export default formatValue;
