import TimeMachineQuarterPickerFilter from './filter';
import type { TimeMachineQuarterPickerFilterProps } from './filter/types/time-machine-quater-picker';
import TimeMachineQuarterPickerMain from './main';
import type { TimeMachineQuarterPickerMainProps } from './main/types/time-machine-quarter-picker';

export type TimeMachineQuarterPickerProps = TimeMachineQuarterPickerMainProps | TimeMachineQuarterPickerFilterProps;

const TimeMachineQuarterPicker = (props: TimeMachineQuarterPickerProps) => {
  if (props.isFilter) {
    return <TimeMachineQuarterPickerFilter {...props} />;
  }

  return <TimeMachineQuarterPickerMain {...props} />;
};

export default TimeMachineQuarterPicker;
