import { TextField } from '@mui/material';
import ReactDatePicker, { type DatePickerProps } from 'react-datepicker';

const TimeField = (props: DatePickerProps) => {
  return (
    <ReactDatePicker
      selectsStart
      showTimeSelect
      showTimeSelectOnly
      customInput={<TextField label="Time" fullWidth size="small" />}
      dateFormat="HH:mm"
      placeholderText="hh:mm"
      timeCaption="Time"
      timeFormat="HH:mm"
      timeIntervals={15}
      wrapperClassName="w-full"
      {...props}
    />
  );
};

export default TimeField;
