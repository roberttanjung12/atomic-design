import type { Dispatch, SetStateAction } from 'react';
import type { DateValue } from './date-value';
import type { DateValueWithMode } from './date-value-with-mode';
import type { Locale } from './locale';
import type { Modes } from './modes';

export interface UseDate {
  open: boolean;
  temporaryDate: DateValue;
  mode: Modes;
  setTemporaryDate: Dispatch<SetStateAction<DateValue>>;
  setMode: Dispatch<SetStateAction<Modes>>;
  handleOpen: () => void;
  handleClose: () => void;
  handleTemporary: (date: DateValue) => void;
  renderTitle: (props: any) => any;
  handleApply: () => any;
}

export interface UseDateProps {
  date: DateValueWithMode;
  locale: Locale;
  onApply: (date: DateValueWithMode) => void;
}
