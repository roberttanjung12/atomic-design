import TimeMachineDateRangeTwoMonthsFilter from './filter';
import type { TimeMachineDateRangeTwoMonthsFilterProps } from './filter/types/time-machine-date-range-filter-props';
import TimeMachineDateRangeTwoMonthsMain from './main';
import type { TimeMachineDateRangeTwoMonthsMainProps } from './main/types/time-machine-date-range';

export type TimeMachineDateRangeTwoMonthsProps =
  | TimeMachineDateRangeTwoMonthsMainProps
  | TimeMachineDateRangeTwoMonthsFilterProps;

const TimeMachineDateRangeTwoMonths = (props: TimeMachineDateRangeTwoMonthsProps) => {
  if (props.isFilter) {
    return <TimeMachineDateRangeTwoMonthsFilter {...props} />;
  }

  return <TimeMachineDateRangeTwoMonthsMain {...props} />;
};

export default TimeMachineDateRangeTwoMonths;
