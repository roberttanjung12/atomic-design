/*
   - Templates Date Range with time. Start date start from 00.00, for end date end to 23.00.
*/

import type { Dispatch, SetStateAction } from 'react';
import { startOfDay, endOfDay, subDays } from 'date-fns';
import type { DateValue } from '../types/date-value';

const handleTemplateRange = (textContent: string, setTemporaryDate: Dispatch<SetStateAction<DateValue>>) => {
  let startDate: Date | null = null;
  let endDate: Date | null = null;

  switch (textContent) {
    case 'Today':
      startDate = startOfDay(new Date());
      endDate = endOfDay(new Date());
      break;
    case 'Yesterday': {
      const yesterday = subDays(new Date(), 1);

      startDate = startOfDay(yesterday);
      endDate = endOfDay(yesterday);
      break;
    }
    case 'Last 7 Days':
      startDate = startOfDay(subDays(new Date(), 7));
      endDate = endOfDay(new Date());
      break;

    case 'Last 30 Days':
      startDate = startOfDay(subDays(new Date(), 30));
      endDate = endOfDay(new Date());
      break;

    case 'Last 60 Days':
      startDate = startOfDay(subDays(new Date(), 60));
      endDate = endOfDay(new Date());
      break;

    default:
      break;
  }

  setTemporaryDate([startDate, endDate]);
};

export default handleTemplateRange;
