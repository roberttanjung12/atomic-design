import moment from 'moment';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import TimeMachineDatePickerMain from '../main';
import type { TimeMachineDatePickerFilterProps } from './types/time-machine-date-picker-filter-props';

const FORMAT = 'DD-MM-YYYY HH:mm:ss';

const TimeMachineDatePickerFilter = (props: TimeMachineDatePickerFilterProps) => {
  const { filter, ...rest } = props;

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);

  const dateParam = searchParams.get(filter.name);
  const date = dateParam ? moment(dateParam, FORMAT).toDate() : null;

  const handleSearch = (term: Date | null) => {
    if (term) params.set(filter.name, moment(term).format(FORMAT));
    replace(`${pathname}?${params.toString()}`);
  };

  const handleClear = () => {
    params.delete(filter.name);
    replace(`${pathname}?${params.toString()}`);
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
