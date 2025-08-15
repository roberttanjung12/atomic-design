import type { TimeMachineTimeRangeMainProps } from '../../main/types/time-machine-time-range';

export type TimeMachineTimeRangeFilterProps = {
  isFilter: true;
  filter: { startName: string; endName: string };
  date?: never;
  onApply?: never;
  onClear?: never;
} & Omit<TimeMachineTimeRangeMainProps, 'isFilter' | 'filter' | 'date' | 'onApply' | 'onClear'>;
