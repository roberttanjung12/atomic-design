import { Box, Button } from '@mui/material';
import { id } from 'date-fns/locale';
import DatePicker from 'react-datepicker';
import DateField from './components/field';
import ModalWrapper from './components/modal-wrapper';
import TimeField from './components/time-field';
import DatePickerStyled from './date-range.styled';
import formatValue from './helpers/formatValue';
import useDate from './helpers/use-date';
import type { DateValue } from './types/date-value';
import type { TimeMachineDatePickerMainProps } from './types/time-machine-date-picker';

const TimeMachineDatePickerMain = ({
  label,
  date,
  datePickerProps,
  timePickerProps,
  textFieldProps,
  showTime,
  locale = id,
  onApply,
  onClear
}: TimeMachineDatePickerMainProps) => {
  const { open, temporaryDate, setTemporaryDate, renderTitle, handleTemporary, handleClose, handleOpen, handleApply } =
    useDate({
      date,
      locale,
      onApply
    });
  const renderedValue = formatValue(date, locale, showTime);

  const dateProps = typeof datePickerProps === 'function' ? datePickerProps(temporaryDate) : datePickerProps;
  const timeProps = typeof timePickerProps === 'function' ? timePickerProps(temporaryDate) : timePickerProps;

  const handleChange = (newDate: DateValue) => {
    handleTemporary(newDate);
    if (dateProps?.onChange) {
      dateProps?.onChange(newDate);
    }
  };

  return (
    <>
      <DateField
        textFieldProps={{
          label: label,
          value: renderedValue,
          onChange: handleOpen,
          onClick: handleOpen,
          ...textFieldProps
        }}
        onClear={onClear}
        setTemporaryDate={setTemporaryDate}
      />

      <ModalWrapper open={open} onClose={handleClose}>
        <DatePickerStyled>
          <DatePicker
            inline
            showYearDropdown
            selected={temporaryDate}
            renderCustomHeader={renderTitle}
            locale={locale}
            {...dateProps}
            onChange={handleChange}
          />

          {showTime && (
            <Box mb={2}>
              <TimeField selected={temporaryDate} onChange={handleChange} locale={locale} {...timeProps} />
            </Box>
          )}
        </DatePickerStyled>

        <Box display="flex" gap={2} justifyContent="right">
          <Button size="small" variant="outlined" color="error" onClick={handleClose} fullWidth>
            Cancel
          </Button>
          <Button size="small" variant="contained" onClick={handleApply} fullWidth>
            Apply
          </Button>
        </Box>
      </ModalWrapper>
    </>
  );
};

export default TimeMachineDatePickerMain;
