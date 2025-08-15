import type { TimeMachineUltimateMainProps } from '../../main/types/time-machine-date-range';

export type TimeMachineUltimateFilterProps = {
  isFilter: true;
  filter: { startName: string; endName: string; modeName: string };
  date?: never;
  onApply?: never;
  onClear?: never;
} & Omit<TimeMachineUltimateMainProps, 'isFilter' | 'filter' | 'date' | 'onApply' | 'onClear'>;
