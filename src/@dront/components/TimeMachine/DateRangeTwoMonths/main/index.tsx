import { useMemo } from 'react';
import { Button, Grid } from '@mui/material';
import { Box } from '@mui/system';
import { id } from 'date-fns/locale';
import DatePicker from 'react-datepicker';
import DateRangeField from './components/field';
import ModalWrapper from './components/modal-wrapper';
import Templates from './components/templates';
import DatePickerStyled from './date-range.styled';
import formatValue from './helpers/formatValue';
import useDate from './helpers/use-date';
import type { TimeMachineDateRangeTwoMonthsMainProps } from './types/time-machine-date-range';

const TimeMachineDateRangeMain = ({
  label,
  date,
  datePickerProps,
  textFieldProps,
  locale = id,
  onApply,
  onClear
}: TimeMachineDateRangeTwoMonthsMainProps) => {
  const { open, temporaryDate, setTemporaryDate, renderTitle, handleTemporary, handleClose, handleOpen, handleApply } =
    useDate({
      date,
      locale,
      onApply
    });

  const renderedValue = formatValue(date, locale);
  const dateProps = typeof datePickerProps === 'function' ? datePickerProps(temporaryDate) : datePickerProps;

  const monthShown = useMemo(() => 2, []);

  return (
    <>
      <DateRangeField
        textFieldProps={{
          label: label,
          value: renderedValue,
          onChange: handleOpen,
          onClick: handleOpen,
          ...textFieldProps
        }}
        setTemporaryDate={setTemporaryDate}
        onClear={onClear}
      />

      <ModalWrapper open={open} onClose={handleClose}>
        <DatePickerStyled>
          <Grid container alignItems="stretch">
            <Grid size={{ xs: 12, md: 2.4 }}>
              <Templates setTemporaryDate={setTemporaryDate} />
            </Grid>

            <Grid
              size={{ xs: 12, md: 9.6 }}
              sx={({ palette }) => ({
                borderLeft: `1px solid ${palette.grey[300]}`,
                borderRight: `1px solid ${palette.grey[300]}`
              })}
            >
              <DatePicker
                inline
                selectsRange
                showYearDropdown
                selected={temporaryDate[0]}
                startDate={temporaryDate[0] || undefined}
                endDate={temporaryDate[1] || undefined}
                renderCustomHeader={renderTitle}
                locale={locale}
                {...dateProps}
                onChange={handleTemporary}
                monthsShown={monthShown}
              />

              <Box
                display="flex"
                gap={2}
                justifyContent="right"
                p={2}
                sx={{ borderTop: ({ palette }) => `1px solid ${palette.grey[300]}` }}
              >
                <Button
                  size="small"
                  variant="outlined"
                  color="error"
                  onClick={handleClose}
                  sx={{ width: 'min(100%, 160px)' }}
                >
                  Cancel
                </Button>
                <Button size="small" variant="contained" onClick={handleApply} sx={{ width: 'min(100%, 160px)' }}>
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

export default TimeMachineDateRangeMain;
