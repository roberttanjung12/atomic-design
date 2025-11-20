import { useState, useEffect } from 'react';
import { parse, format, isValid } from 'date-fns';
import TimeMachineDatePickerMain from '../main';
import type { TimeMachineDatePickerFilterProps } from './types/time-machine-date-picker-filter-props';

const FORMAT = 'dd-MM-yyyy HH:mm:ss';

const TimeMachineDatePickerFilter = (props: TimeMachineDatePickerFilterProps) => {
  const { filter, ...rest } = props;
  const [date, setDate] = useState<Date | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const dateParam = params.get(filter.name);
      const parsedDate = dateParam ? parse(dateParam, FORMAT, new Date()) : null;

      setDate(parsedDate && isValid(parsedDate) ? parsedDate : null);
    }
  }, [filter.name]);

  const handleSearch = (term: Date | null) => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);

      if (term) params.set(filter.name, format(term, FORMAT));

      const newUrl = `${window.location.pathname}?${params.toString()}`;

      window.history.pushState({}, '', newUrl);
      setDate(term);
    }
  };

  const handleClear = () => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);

      params.delete(filter.name);

      const newUrl = `${window.location.pathname}?${params.toString()}`;

      window.history.pushState({}, '', newUrl);
      setDate(null);
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

export default TimeMachineDatePickerFilter;
