import type { KeyboardEvent, MouseEvent } from 'react';
import { type TextFieldProps } from '@mui/material';
import { type DatePickerProps } from 'react-datepicker';
import type { DateValue } from './date-value';
import type { Locale } from './locale';

type DateTimePickerProps = Omit<DatePickerProps, 'onChange' | 'selectsRange'> & {
  selectsRange?: never;
  selectsMultiple?: never;
  showMonthYearDropdown?: never;
  onChange?: (date: DateValue, event?: MouseEvent<HTMLElement> | KeyboardEvent<HTMLElement>) => void;
};

type CallbackDateTimePickerProps = (date: DateValue) => DateTimePickerProps;

type DatePickerPropsWithCallback = CallbackDateTimePickerProps | DateTimePickerProps;

export type TimeMachineTimeRangeMainProps = {
  isFilter?: false;
  filter?: false;
  date: DateValue;
  onApply: (date: DateValue) => void;
  onClear?: () => void;

  variant: 'time-range';
  label?: string;
  locale?: Locale;
  startTimeProps?: DatePickerPropsWithCallback;
  endTimeProps?: DatePickerPropsWithCallback;
  textFieldProps?: TextFieldProps;
};
