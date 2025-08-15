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

export type TimeMachineQuarterPickerMainProps = {
  isFilter?: false;
  filter?: never;
  date: [DateValue, DateValue];
  onApply: (date: [DateValue, DateValue]) => void;
  onClear?: () => void;

  variant: 'quarter-picker';
  label?: string;
  locale?: Locale;
  datePickerProps?: DatePickerPropsWithCallback;
  textFieldProps?: TextFieldProps;
};
