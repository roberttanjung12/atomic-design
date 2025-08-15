import type { KeyboardEvent, MouseEvent } from 'react';
import { type TextFieldProps } from '@mui/material';
import { type DatePickerProps } from 'react-datepicker';
import type { DateValue } from './date-value';

type DateTimePickerProps = Omit<DatePickerProps, 'onChange' | 'selectsRange'> & {
  selectsRange: true;
  selectsMultiple?: never;
  showMonthYearDropdown?: never;
  onChange?: (date: DateValue, event?: MouseEvent<HTMLElement> | KeyboardEvent<HTMLElement>) => void;
};

type CallbackDateTimePickerProps = (date: DateValue) => DateTimePickerProps;

type DatePickerPropsWithCallback = CallbackDateTimePickerProps | DateTimePickerProps;

export type TimeMachineDateRangeTwoMonthsMainProps = {
  isFilter?: false;
  filter?: never;
  date: DateValue;
  onApply: (date: DateValue) => void;
  onClear?: () => void;

  variant: 'date-range-two-months';
  label?: string;
  locale?: 'id' | 'en';
  datePickerProps?: DatePickerPropsWithCallback;
  textFieldProps?: TextFieldProps;
};
