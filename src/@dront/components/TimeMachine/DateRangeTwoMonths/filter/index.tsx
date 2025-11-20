import { useState, useEffect } from 'react';
import { parse, format } from 'date-fns';
import TimeMachineDatePickerMain from '../main';
import type { TimeMachineDateRangeTwoMonthsFilterProps } from './types/time-machine-date-range-filter-props';

const FORMAT = 'dd-MM-yyyy HH:mm:ss';

const TimeMachineDateRangeFilter = (props: TimeMachineDateRangeTwoMonthsFilterProps) => {
  const { filter, ...rest } = props;
  const [date, setDate] = useState<[Date | null, Date | null]>([null, null]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const startDateParam = params.get(filter.startName);
      const startDate = startDateParam ? parse(startDateParam, FORMAT, new Date()) : null;
      const endDateParam = params.get(filter.endName);
      const endDate = endDateParam ? parse(endDateParam, FORMAT, new Date()) : null;

      setDate([startDate, endDate]);
    }
  }, [filter.startName, filter.endName]);

  const handleSearch = (term: [Date | null, Date | null]) => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);

      if (term[0] && term[1]) {
        params.set(filter.startName, format(term[0], FORMAT));
        params.set(filter.endName, format(term[1], FORMAT));
      }
      const newUrl = `${window.location.pathname}?${params.toString()}`;

      window.history.pushState({}, '', newUrl);
      setDate(term);
    }
  };

  const handleClear = () => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);

      params.delete(filter.startName);
      params.delete(filter.endName);
      const newUrl = `${window.location.pathname}?${params.toString()}`;

      window.history.pushState({}, '', newUrl);
      setDate([null, null]);
    }
  };

  return (
    <TimeMachineDatePickerMain {...rest} isFilter={false} date={date} onApply={handleSearch} onClear={handleClear} />
  );
};

export default TimeMachineDateRangeFilter;
