import TimeMachineTimeRangeFilter from './filter';
import type { TimeMachineTimeRangeFilterProps } from './filter/types/time-machine-time-range-filter';
import TimeMachineTimeRangeMain from './main';
import type { TimeMachineTimeRangeMainProps } from './main/types/time-machine-time-range';

export type TimeMachineTimeRangeProps = TimeMachineTimeRangeMainProps | TimeMachineTimeRangeFilterProps;

const TimeMachineTimeRange = (props: TimeMachineTimeRangeProps) => {
  if (props.isFilter) {
    return <TimeMachineTimeRangeFilter {...props} />;
  }

  return <TimeMachineTimeRangeMain {...props} />;
};

export default TimeMachineTimeRange;
