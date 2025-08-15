import type { Dispatch, SetStateAction } from 'react';
import type { DateValue } from './date-value';
import type { Locale } from './locale';

export interface UseDate {
  open: boolean;
  temporaryDate: DateValue;
  setTemporaryDate: Dispatch<SetStateAction<DateValue>>;
  handleOpen: () => void;
  handleClose: () => void;
  handleTemporary: (date: DateValue) => void;
  renderTitle: (props: any) => any;
  handleApply: () => any;
}

export interface UseDateProps {
  date: [DateValue, DateValue];
  locale: Locale;
  onApply: (date: [DateValue, DateValue]) => void;
}
