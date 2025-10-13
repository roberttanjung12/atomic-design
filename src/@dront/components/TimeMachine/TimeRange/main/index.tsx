import { Box, Button, FormLabel, Grid, TextField } from '@mui/material';
import { enUS } from 'date-fns/locale';
import ReactDatePicker from 'react-datepicker';
import TimeField from './components/field';
import ModalWrapper from './components/modal-wrapper';
import DatePickerStyled from './date-range.styled';
import formatValue from './helpers/formatValue';
import useDate from './helpers/use-date';
import type { TimeMachineTimeRangeMainProps } from './types/time-machine-time-range';

const TimeMachineTimeRangeMain = ({
  label,
  date,
  startTimeProps,
  endTimeProps,
  textFieldProps,
  locale = enUS,
  formatRenderValue,
  onApply,
  onClear
}: TimeMachineTimeRangeMainProps) => {
  const { open, temporaryDate, setTemporaryDate, handleClose, handleOpen, handleApply } = useDate({
    date,
    locale,
    onApply
  });

  const renderedValue = formatRenderValue ? formatRenderValue(date, locale) : formatValue(date, locale);
  const startProps = typeof startTimeProps === 'function' ? startTimeProps(temporaryDate) : startTimeProps;
  const endProps = typeof endTimeProps === 'function' ? endTimeProps(temporaryDate) : endTimeProps;

  return (
    <>
      <TimeField
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
        <DatePickerStyled p={2}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
              <FormLabel sx={{ display: 'block', mb: '8px', color: ({ palette }) => palette.common.black }}>
                From Time
              </FormLabel>
              <ReactDatePicker
                selectsStart
                showTimeSelect
                showTimeSelectOnly
                customInput={<TextField fullWidth size="small" />}
                dateFormat="HH:mm"
                placeholderText="hh:mm"
                selected={temporaryDate[0]}
                timeCaption="Time"
                timeFormat="HH:mm"
                timeIntervals={15}
                wrapperClassName="w-full"
                locale={locale}
                {...startProps}
                onChange={value => setTemporaryDate([value, null])}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <FormLabel sx={{ display: 'block', mb: '8px', color: ({ palette }) => palette.common.black }}>
                To Time
              </FormLabel>
              <ReactDatePicker
                selectsStart
                showTimeSelect
                showTimeSelectOnly
                customInput={<TextField fullWidth size="small" />}
                dateFormat="HH:mm"
                disabled={!temporaryDate[0]}
                placeholderText="hh:mm"
                timeCaption="Time"
                timeFormat="HH:mm"
                timeIntervals={15}
                wrapperClassName="w-full"
                selected={temporaryDate[1]}
                locale={locale}
                {...endProps}
                onChange={value => {
                  setTemporaryDate([temporaryDate[0], value]);
                }}
              />
            </Grid>

            <Grid size={{ xs: 12 }} display="flex" justifyContent="right">
              <Box width="calc(50% - 8px)" display="flex" gap={2} justifyContent="right">
                <Button size="small" variant="outlined" color="error" onClick={handleClose} fullWidth>
                  Cancel
                </Button>
                <Button size="small" variant="contained" onClick={handleApply} fullWidth>
                  Apply
                </Button>
              </Box>
            </Grid>
          </Grid>
        </DatePickerStyled>
      </ModalWrapper>
    </>
  );
};

export default TimeMachineTimeRangeMain;
