import type { TimeMachineDatePickerMainProps } from '../../main/types/time-machine-date-picker';

export type TimeMachineDatePickerFilterProps = {
  isFilter: true;
  filter: { name: string };
  date?: never;
  onApply?: never;
  onClear?: never;
} & Omit<TimeMachineDatePickerMainProps, 'isFilter' | 'filter' | 'date' | 'onApply' | 'onClear'>;
