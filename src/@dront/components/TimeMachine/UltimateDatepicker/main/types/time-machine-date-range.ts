import type { KeyboardEvent, MouseEvent } from 'react';
import { type TextFieldProps } from '@mui/material';
import { type DatePickerProps } from 'react-datepicker';
import type { DateValue } from './date-value';
import type { DateValueWithMode } from './date-value-with-mode';

type DateTimePickerProps = Omit<DatePickerProps, 'onChange' | 'selectsRange'> & {
  selectsRange: true;
  selectsMultiple?: never;
  showMonthYearDropdown?: never;
  onChange?: (date: DateValue, event?: MouseEvent<HTMLElement> | KeyboardEvent<HTMLElement>) => void;
};

type CallbackDateTimePickerProps = (date: DateValue) => DateTimePickerProps;

type DatePickerPropsWithCallback = CallbackDateTimePickerProps | DateTimePickerProps;

export type TimeMachineUltimateMainProps = {
  isFilter?: false;
  filter?: never;
  date: DateValueWithMode;
  onApply: (date: DateValueWithMode) => void;
  onClear?: () => void;

  variant: 'ultimate';
  label?: string;
  showTime?: boolean;
  locale?: 'id' | 'en';
  datePickerProps?: DatePickerPropsWithCallback;
  textFieldProps?: TextFieldProps;
};
