import { parse, format } from 'date-fns';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import TimeMachineTimeRangeMain from '../main';
import type { TimeMachineTimeRangeFilterProps } from './types/time-machine-time-range-filter';

const FORMAT = 'dd-MM-yyyy HH:mm:ss';

const TimeMachineTimeRangeFilter = (props: TimeMachineTimeRangeFilterProps) => {
  const { filter, ...rest } = props;

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);

  const startDateParam = searchParams.get(filter.startName);
  const startDate = startDateParam ? parse(startDateParam, FORMAT, new Date()) : null;
  const endDateParam = searchParams.get(filter.endName);
  const endDate = endDateParam ? parse(endDateParam, FORMAT, new Date()) : null;
  const date: [Date | null, Date | null] = [startDate, endDate];

  const handleSearch = (term: [Date | null, Date | null]) => {
    if (term[0] && term[1]) {
      params.set(filter.startName, format(term[0], FORMAT));
      params.set(filter.endName, format(term[1], FORMAT));
    }

    replace(`${pathname}?${params.toString()}`);
  };

  const handleClear = () => {
    params.delete(filter.startName);
    params.delete(filter.endName);
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <TimeMachineTimeRangeMain {...rest} isFilter={false} date={date} onApply={handleSearch} onClear={handleClear} />
  );
};

export default TimeMachineTimeRangeFilter;
