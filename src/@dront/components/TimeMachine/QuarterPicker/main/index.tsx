import { Box, Button } from '@mui/material';
import { id } from 'date-fns/locale';
import DatePicker from 'react-datepicker';
import DateField from './components/field';
import ModalWrapper from './components/modal-wrapper';
import DatePickerStyled from './date-range.styled';
import formatValue from './helpers/formatValue';
import useDate from './helpers/use-date';
import type { DateValue } from './types/date-value';
import type { TimeMachineQuarterPickerMainProps } from './types/time-machine-quarter-picker';

const TimeMachineQuarterPickerMain = ({
  label,
  date,
  datePickerProps,
  textFieldProps,
  locale = id,
  formatRenderValue,
  onApply,
  onClear
}: TimeMachineQuarterPickerMainProps) => {
  const { open, temporaryDate, setTemporaryDate, renderTitle, handleTemporary, handleClose, handleOpen, handleApply } =
    useDate({
      date,
      locale,
      onApply
    });
  const renderedValue = formatRenderValue ? formatRenderValue(date, locale) : formatValue(date, locale);

  const dateProps = typeof datePickerProps === 'function' ? datePickerProps(temporaryDate) : datePickerProps;

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
          onKeyDown: e => {
            if (e.key === 'Enter') {
              handleOpen();
            }
          },
          ...textFieldProps
        }}
        setTemporaryDate={setTemporaryDate}
        onClear={onClear}
      />

      <ModalWrapper open={open} onClose={handleClose}>
        <DatePickerStyled>
          <DatePicker
            inline
            showYearDropdown
            selected={temporaryDate}
            showQuarterYearPicker
            renderCustomHeader={renderTitle}
            locale={locale}
            {...dateProps}
            onChange={handleChange}
          />
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

export default TimeMachineQuarterPickerMain;
