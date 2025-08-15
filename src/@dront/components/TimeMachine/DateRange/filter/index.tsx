import moment from 'moment';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import TimeMachineDatePickerMain from '../main';
import type { TimeMachineDateRangeFilterProps } from './types/time-machine-date-range-filter-props';

const FORMAT = 'DD-MM-YYYY HH:mm:ss';

const TimeMachineDateRangeFilter = (props: TimeMachineDateRangeFilterProps) => {
  const { filter, ...rest } = props;

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);

  const startDateParam = searchParams.get(filter.startName);
  const startDate = startDateParam ? moment(startDateParam, FORMAT).toDate() : null;
  const endDateParam = searchParams.get(filter.endName);
  const endDate = endDateParam ? moment(endDateParam, FORMAT).toDate() : null;
  const date: [Date | null, Date | null] = [startDate, endDate];

  const handleSearch = (term: [Date | null, Date | null]) => {
    if (term[0] && term[1]) {
      params.set(filter.startName, moment(term[0]).format(FORMAT));
      params.set(filter.endName, moment(term[1]).format(FORMAT));
    }

    replace(`${pathname}?${params.toString()}`);
  };

  const handleClear = () => {
    params.delete(filter.startName);
    params.delete(filter.endName);
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

export default TimeMachineDateRangeFilter;
