import TimeMachineDateRangeFilter from './filter';
import type { TimeMachineDateRangeFilterProps } from './filter/types/time-machine-date-range-filter-props';
import TimeMachineDateRangeMain from './main';
import type { TimeMachineDateRangeMainProps } from './main/types/time-machine-date-range';

export type TimeMachineDateRangeProps = TimeMachineDateRangeMainProps | TimeMachineDateRangeFilterProps;

const TimeMachineDateRange = (props: TimeMachineDateRangeProps) => {
  if (props.isFilter) {
    return <TimeMachineDateRangeFilter {...props} />;
  }

  return <TimeMachineDateRangeMain {...props} />;
};

export default TimeMachineDateRange;
