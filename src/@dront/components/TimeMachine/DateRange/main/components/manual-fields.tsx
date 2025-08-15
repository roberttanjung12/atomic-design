import type { Dispatch, FC, SetStateAction } from 'react';
import { Box, FormLabel, TextField } from '@mui/material';
import moment from 'moment';
import ReactDatePicker from 'react-datepicker';
import useHandleRange from '../helpers/use-handle-range';
import type { DateValue } from '../types/date-value';
import type { Locale } from '../types/locale';

interface ManualFieldsProps {
  startDateVal: Date | null;
  endDateVal: Date | null;
  setTemporaryDate: Dispatch<SetStateAction<DateValue>>;
  showTimeField: boolean;
  locale: Locale;
}

const ManualFields: FC<ManualFieldsProps> = ({ startDateVal, endDateVal, setTemporaryDate, showTimeField, locale }) => {
  useHandleRange({ startDateVal, endDateVal, setTemporaryDate });

  return (
    <Box>
      <Box sx={{ display: 'flex', gap: '8px', textAlign: 'left' }}>
        <Box sx={{ flexGrow: 1 }}>
          <FormLabel sx={{ display: 'block', mb: '8px', color: ({ palette }) => palette.common.black }}>
            From Date
          </FormLabel>
          <ReactDatePicker
            selectsStart
            customInput={<TextField fullWidth size="small" />}
            dateFormat="dd-MM-yyyy"
            placeholderText="DD-MM-YYYY"
            selected={startDateVal}
            startDate={startDateVal || undefined}
            endDate={endDateVal || undefined}
            wrapperClassName="w-full"
            locale={locale}
            onChange={value => {
              setTemporaryDate([value, null]);
            }}
          />
        </Box>

        <Box sx={{ flexGrow: 1 }}>
          <FormLabel sx={{ display: 'block', mb: '8px', color: ({ palette }) => palette.common.black }}>
            To Date
          </FormLabel>
          <ReactDatePicker
            selectsEnd
            customInput={<TextField fullWidth size="small" />}
            dateFormat="dd-MM-yyyy"
            disabled={!startDateVal}
            minDate={startDateVal || undefined}
            placeholderText="DD-MM-YYYY"
            selected={endDateVal}
            startDate={startDateVal || undefined}
            endDate={endDateVal || undefined}
            wrapperClassName="w-full"
            locale={locale}
            onChange={value => {
              setTemporaryDate([startDateVal, moment(value).endOf('day').toDate()]);
            }}
          />
        </Box>
      </Box>
      {showTimeField && (
        <Box sx={{ display: 'flex', gap: '8px', mt: '16px', textAlign: 'left' }}>
          <Box sx={{ flexGrow: 1 }}>
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
              selected={startDateVal}
              timeCaption="Time"
              timeFormat="HH:mm"
              timeIntervals={15}
              wrapperClassName="w-full"
              locale={locale}
              onChange={value => setTemporaryDate([value, null])}
            />
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <FormLabel sx={{ display: 'block', mb: '8px', color: ({ palette }) => palette.common.black }}>
              To Time
            </FormLabel>
            <ReactDatePicker
              selectsStart
              showTimeSelect
              showTimeSelectOnly
              customInput={<TextField fullWidth size="small" />}
              dateFormat="HH:mm"
              disabled={!startDateVal}
              placeholderText="hh:mm"
              timeCaption="Time"
              timeFormat="HH:mm"
              timeIntervals={15}
              wrapperClassName="w-full"
              selected={endDateVal}
              locale={locale}
              onChange={value => {
                setTemporaryDate([startDateVal, value]);
              }}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ManualFields;
