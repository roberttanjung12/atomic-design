import type { TimeMachineDateRangeMainProps } from '../../main/types/time-machine-date-range';

export type TimeMachineDateRangeFilterProps = {
  isFilter: true;
  filter: { startName: string; endName: string };
  date?: never;
  onApply?: never;
  onClear?: never;
} & Omit<TimeMachineDateRangeMainProps, 'isFilter' | 'filter' | 'date' | 'onApply' | 'onClear'>;
