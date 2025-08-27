import TimeMachineDatePickerFilter from './filter';
import type { TimeMachineDatePickerFilterProps } from './filter/types/time-machine-date-picker-filter-props';
import TimeMachineDatePickerMain from './main';
import type { TimeMachineDatePickerMainProps } from './main/types/time-machine-date-picker';

export type TimeMachineDatePickerProps = TimeMachineDatePickerMainProps | TimeMachineDatePickerFilterProps;

const TimeMachineDatePicker = (props: TimeMachineDatePickerProps) => {
  if (props.isFilter) {
    return <TimeMachineDatePickerFilter {...props} />;
  }

  return <TimeMachineDatePickerMain {...props} />;
};

export default TimeMachineDatePicker;
