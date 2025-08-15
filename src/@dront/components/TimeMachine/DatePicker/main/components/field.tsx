import type { Dispatch, MouseEvent, SetStateAction } from 'react';
import EventNoteIcon from '@mui/icons-material/EventNote';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { IconButton, TextField, type TextFieldProps } from '@mui/material';
import type { DateValue } from '../types/date-value';

type DateFieldProps = {
  onClear?: (e: MouseEvent<HTMLButtonElement>) => void;
  setTemporaryDate: Dispatch<SetStateAction<DateValue>>;
  textFieldProps: TextFieldProps;
};

const DateField = ({ onClear, setTemporaryDate, textFieldProps }: DateFieldProps) => {
  const renderEndAdornment = () => {
    if (textFieldProps.value) {
      return (
        <IconButton
          size="small"
          onClick={e => {
            e.stopPropagation();
            if (onClear) {
              setTemporaryDate(null);
              onClear(e);
            }
          }}
        >
          <HighlightOffIcon />
        </IconButton>
      );
    }

    return <EventNoteIcon color="disabled" fontSize="small" />;
  };

  return (
    <TextField
      size="small"
      placeholder="Select Date"
      sx={{ '& .MuiInputBase-input': { paddingLeft: '22px' } }}
      fullWidth
      slotProps={{
        input: {
          endAdornment: renderEndAdornment()
        }
      }}
      {...textFieldProps}
    />
  );
};

export default DateField;
