import TimeMachineUltimateFilter from './filter';
import type { TimeMachineUltimateFilterProps } from './filter/types/time-machine-ultime-filter-props';
import TimeMachineUltimateMain from './main';
import type { TimeMachineUltimateMainProps } from './main/types/time-machine-date-range';

export type TimeMachineUltimateProps = TimeMachineUltimateMainProps | TimeMachineUltimateFilterProps;

const TimeMachineUltimate = (props: TimeMachineUltimateProps) => {
  if (props.isFilter) {
    return <TimeMachineUltimateFilter {...props} />;
  }

  return <TimeMachineUltimateMain {...props} />;
};

export default TimeMachineUltimate;
