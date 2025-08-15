import type { TimeMachineQuarterPickerMainProps } from '../../main/types/time-machine-quarter-picker';

export type TimeMachineQuarterPickerFilterProps = {
  isFilter: true;
  filter: { startName: string; endName: string };
  date?: never;
  onApply?: never;
  onClear?: never;
} & Omit<TimeMachineQuarterPickerMainProps, 'isFilter' | 'filter' | 'date' | 'onApply' | 'onClear'>;
