/*
   - Templates Date Range with time. Start date start from 00.00, for end date end to 23.00.
*/

import type { Dispatch, SetStateAction } from 'react';
import moment from 'moment';
import type { DateValue } from '../types/date-value';

const handleTemplateRange = (textContent: string, setTemporaryDate: Dispatch<SetStateAction<DateValue>>) => {
  let startDate;
  let endDate;

  switch (textContent) {
    case 'Today':
      startDate = moment().startOf('day');
      endDate = moment().endOf('day');
      break;
    case 'Yesterday':
      startDate = moment().subtract(1, 'days').startOf('day');
      endDate = moment().subtract(1, 'days').endOf('day');
      break;
    case 'Last 7 Days':
      startDate = moment().subtract(6, 'days').startOf('day');
      endDate = moment().endOf('day');
      break;
    case 'Last 31 Days':
      startDate = moment().subtract(30, 'days').startOf('day');
      endDate = moment().endOf('day');
      break;
    default:
      break;
  }

  setTemporaryDate([startDate?.toDate() || null, endDate?.toDate() || null]);
};

export default handleTemplateRange;
