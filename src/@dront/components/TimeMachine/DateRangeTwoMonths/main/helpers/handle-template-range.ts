/*
  - Templates Date Range with time. Start date start from 00.00, for end date end to 23.59:59.999.
*/

import type { Dispatch, SetStateAction } from 'react';
import { startOfDay, endOfDay, subDays } from 'date-fns';
import type { DateValue } from '../types/date-value';

const handleTemplateRange = (textContent: string, setTemporaryDate: Dispatch<SetStateAction<DateValue>>) => {
  let startDate: Date | null = null;
  let endDate: Date | null = null;
  const today = new Date();

  switch (textContent) {
    case 'Today':
      startDate = startOfDay(today);
      endDate = endOfDay(today);
      break;
    case 'Yesterday': {
      const yesterday = subDays(today, 1);

      startDate = startOfDay(yesterday);
      endDate = endOfDay(yesterday);
      break;
    }
    case 'Last 7 Days':
      startDate = startOfDay(subDays(today, 7));
      endDate = endOfDay(today);
      break;
    case 'Last 30 Days':
      startDate = startOfDay(subDays(today, 30));
      endDate = endOfDay(today);
      break;
    case 'Last 60 Days':
      startDate = startOfDay(subDays(today, 60));
      endDate = endOfDay(today);
      break;
    default:
      break;
  }

  setTemporaryDate([startDate, endDate]);
};

export default handleTemplateRange;
