import type { MouseEvent } from 'react';
import { type TextFieldProps } from '@mui/material';
import type { Locale } from 'date-fns';
import { type DatePickerProps } from 'react-datepicker';
import type { DateValue } from './date-value';

type DateTimePickerProps = Omit<DatePickerProps, 'onChange' | 'selectsRange'> & {
  onChange?: (date: Date | null) => void;
  selectsRange?: never;
  selectsMultiple?: never;
  showMonthYearDropdown?: never;
};

type CallbackDateTimePickerProps = (date: DateValue) => DateTimePickerProps;

type DatePickerPropsWithCallback = CallbackDateTimePickerProps | DateTimePickerProps;

export type TimeMachineDatePickerMainProps = {
  isFilter?: false;
  filter?: never;
  date: DateValue;
  onApply: (date: DateValue) => void;
  onClear?: (e: MouseEvent<HTMLButtonElement>) => void;

  variant: 'date-picker';
  label?: string;
  showTime?: boolean;
  locale?: Locale;
  datePickerProps?: DatePickerPropsWithCallback;
  timePickerProps?: DatePickerPropsWithCallback;
  textFieldProps?: TextFieldProps;
  formatRenderValue?: (date: DateValue, locale: Locale, showTime?: boolean) => string;
};
