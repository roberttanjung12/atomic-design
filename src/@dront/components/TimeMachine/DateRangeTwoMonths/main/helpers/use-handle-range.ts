/*
- Handle if the end date is less than the start date
*/

import { type Dispatch, type SetStateAction, useEffect } from 'react';
import type { DateValue } from '../types/date-value';

interface UseHandleRange {
  startDateVal: Date | null;
  endDateVal: Date | null;
  setTemporaryDate: Dispatch<SetStateAction<DateValue>>;
}

const useHandleRange = ({ startDateVal, endDateVal, setTemporaryDate }: UseHandleRange) => {
  useEffect(() => {
    if (!startDateVal || !endDateVal) return;

    if (startDateVal > endDateVal) {
      setTemporaryDate([startDateVal, null]);
    }
  }, [startDateVal, endDateVal, setTemporaryDate]);
};

export default useHandleRange;
