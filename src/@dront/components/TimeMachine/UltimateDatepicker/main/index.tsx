import { Box, Button, Divider, Grid } from '@mui/material';
import { id } from 'date-fns/locale';
import DatePicker from 'react-datepicker';
import DateRangeField from './components/field';
import ManualFields from './components/manual-fields';
import ModalWrapper from './components/modal-wrapper';
import Modes from './components/modes';
import Reset from './components/reset';
import Templates from './components/templates';
import DatePickerStyled from './date-range.styled';
import formatValue from './helpers/formatValue';
import useDate from './helpers/use-date';
import type { TimeMachineUltimateMainProps } from './types/time-machine-date-range';

const TimeMachineUltimateMain = ({
  label,
  date,
  datePickerProps,
  textFieldProps,
  showTime,
  locale = id,
  formatRenderValue,
  onApply,
  onClear
}: TimeMachineUltimateMainProps) => {
  const {
    open,
    temporaryDate,
    mode,
    setMode,
    setTemporaryDate,
    renderTitle,
    handleTemporary,
    handleClose,
    handleOpen,
    handleApply
  } = useDate({
    date,
    locale,
    onApply
  });

  const renderedValue = formatRenderValue
    ? formatRenderValue(date.value, locale, showTime)
    : formatValue(date.value, locale);
  const dateProps = typeof datePickerProps === 'function' ? datePickerProps(temporaryDate) : datePickerProps;

  return (
    <>
      <DateRangeField
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
          <Templates setTemporaryDate={setTemporaryDate} setMode={setMode} />

          <Divider />

          <Grid container alignItems="stretch">
            <Grid size={{ xs: 12, md: 2.4 }}>
              <Modes mode={mode} setMode={setMode} setTemporaryDate={setTemporaryDate} />
            </Grid>

            <Grid
              size={{ xs: 12, md: 4.8 }}
              sx={({ palette }) => ({
                borderLeft: `1px solid ${palette.grey[300]}`,
                borderRight: `1px solid ${palette.grey[300]}`
              })}
            >
              <DatePicker
                inline
                showYearDropdown
                selectsRange
                selected={temporaryDate[0]}
                startDate={temporaryDate[0] || undefined}
                endDate={temporaryDate[1] || undefined}
                renderCustomHeader={renderTitle}
                showMonthYearPicker={mode === 'monthly'}
                showQuarterYearPicker={mode === 'quarter'}
                showYearPicker={mode === 'yearly'}
                locale={locale}
                {...dateProps}
                onChange={handleTemporary}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 4.8 }} p={2} display="flex" flexDirection="column" justifyContent="space-between">
              <Box flexGrow={1}>
                <ManualFields
                  startDateVal={temporaryDate[0]}
                  endDateVal={temporaryDate[1]}
                  mode={mode}
                  setTemporaryDate={setTemporaryDate}
                  showTimeFields={!!showTime}
                  locale={locale}
                />
                <Reset setTemporaryDate={setTemporaryDate} />
              </Box>
              <Box display="flex" gap={2} justifyContent="right">
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

export default TimeMachineUltimateMain;
