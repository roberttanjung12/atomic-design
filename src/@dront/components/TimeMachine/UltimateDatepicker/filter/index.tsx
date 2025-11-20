import { useState, useEffect } from 'react';
import { parse, format } from 'date-fns';
import TimeMachineDatePickerMain from '../main';
import type { DateValueWithMode } from '../main/types/date-value-with-mode';
import type { Modes } from '../main/types/modes';
import type { TimeMachineUltimateFilterProps } from './types/time-machine-ultime-filter-props';

const FORMAT = 'dd-MM-yyyy HH:mm:ss';

const TimeMachineUltimateFilter = (props: TimeMachineUltimateFilterProps) => {
  const { filter, ...rest } = props;
  const [date, setDate] = useState<DateValueWithMode>({
    mode: 'custom-range',
    value: [null, null]
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const startDateParam = params.get(filter.startName);
      const startDate = startDateParam ? parse(startDateParam, FORMAT, new Date()) : null;
      const endDateParam = params.get(filter.endName);
      const endDate = endDateParam ? parse(endDateParam, FORMAT, new Date()) : null;
      const mode = (params.get(filter.modeName) || 'custom-range') as Modes;

      setDate({ mode, value: [startDate, endDate] });
    }
  }, [filter.startName, filter.endName, filter.modeName]);

  const handleSearch = (term: DateValueWithMode) => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);

      if (term.value[0] || term.value[1]) {
        if (term.value[0]) {
          params.set(filter.startName, format(term.value[0], FORMAT));
        }
        if (term.value[1]) {
          params.set(filter.endName, format(term.value[1], FORMAT));
        }
        params.set(filter.modeName, term.mode);
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
      params.delete(filter.modeName);
      const newUrl = `${window.location.pathname}?${params.toString()}`;

      window.history.pushState({}, '', newUrl);
      setDate({ mode: 'custom-range', value: [null, null] });
    }
  };

  return (
    <TimeMachineDatePickerMain
      showTime
      {...rest}
      isFilter={false}
      date={date}
      onApply={handleSearch}
      onClear={handleClear}
    />
  );
};

export default TimeMachineUltimateFilter;
