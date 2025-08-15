import type { Dispatch, SetStateAction } from 'react';
import { endOfDay, endOfMonth, endOfQuarter, endOfYear } from 'date-fns';
import type { DateValue } from '../types/date-value';
import type { Modes } from '../types/modes';
import { getWeekRange } from './getWeekRange';

interface HandleTemporaryByModeParams {
  mode: Modes;
  values: DateValue;
  setTemporaryDate: Dispatch<SetStateAction<DateValue>>;
}

const toTheEnd = (date: Date | null, unitTime: 'day' | 'month' | 'quarter' | 'year') => {
  if (!date) return null;
  switch (unitTime) {
    case 'day':
      return endOfDay(date);
    case 'month':
      return endOfMonth(date);
    case 'quarter':
      return endOfQuarter(date);
    case 'year':
      return endOfYear(date);
    default:
      return date;
  }
};

const handleTemporaryByMode = ({ mode, values, setTemporaryDate }: HandleTemporaryByModeParams) => {
  if (mode === 'daily') {
    setTemporaryDate([values[0], toTheEnd(values[0], 'day')]);

    return;
  }

  if (mode === 'weekly') {
    setTemporaryDate(getWeekRange(values[0]));

    return;
  }

  if (mode === 'monthly') {
    setTemporaryDate([values[0], toTheEnd(values[1], 'month')]);

    return;
  }

  if (mode === 'quarter') {
    setTemporaryDate([values[0], toTheEnd(values[1], 'quarter')]);

    return;
  }

  if (mode === 'yearly') {
    setTemporaryDate([values[0], toTheEnd(values[1], 'year')]);

    return;
  }

  const endDate = toTheEnd(values[1], 'day');

  setTemporaryDate([values[0], endDate]);
};

export default handleTemporaryByMode;
