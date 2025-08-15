import moment from 'moment';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import TimeMachineDatePickerMain from '../main';
import type { DateValueWithMode } from '../main/types/date-value-with-mode';
import type { Modes } from '../main/types/modes';
import type { TimeMachineUltimateFilterProps } from './types/time-machine-ultime-filter-props';

const FORMAT = 'DD-MM-YYYY HH:mm:ss';

const TimeMachineUltimateFilter = (props: TimeMachineUltimateFilterProps) => {
  const { filter, ...rest } = props;

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);

  const startDateParam = searchParams.get(filter.startName);
  const startDate = startDateParam ? moment(startDateParam, FORMAT).toDate() : null;
  const endDateParam = searchParams.get(filter.endName);
  const endDate = endDateParam ? moment(endDateParam, FORMAT).toDate() : null;
  const mode = (searchParams.get(filter.modeName) || 'custom-range') as Modes;
  const date: DateValueWithMode = { mode: mode, value: [startDate, endDate] };

  const handleSearch = (term: DateValueWithMode) => {
    if (term.value[0] || term.value[1]) {
      params.set(filter.startName, moment(term.value[0]).format(FORMAT));
      params.set(filter.endName, moment(term.value[1]).format(FORMAT));
      params.set(filter.modeName, term.mode);
    }

    replace(`${pathname}?${params.toString()}`);
  };

  const handleClear = () => {
    params.delete(filter.startName);
    params.delete(filter.endName);
    params.delete(filter.modeName);
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

export default TimeMachineUltimateFilter;
