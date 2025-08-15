import type { TimeMachineDateRangeTwoMonthsMainProps } from '../../main/types/time-machine-date-range';

export type TimeMachineDateRangeTwoMonthsFilterProps = {
  isFilter: true;
  filter: { startName: string; endName: string };
  date?: never;
  onApply?: never;
  onClear?: never;
} & Omit<TimeMachineDateRangeTwoMonthsMainProps, 'isFilter' | 'filter' | 'date' | 'onApply' | 'onClear'>;
