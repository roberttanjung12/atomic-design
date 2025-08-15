import type { DateValue } from './date-value';
import type { Modes } from './modes';

export type DateValueWithMode = {
  mode: Modes;
  value: DateValue;
};
