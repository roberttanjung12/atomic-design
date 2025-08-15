import type { Dispatch, FC, SetStateAction } from 'react';
import RefreshIcon from '@mui/icons-material/Refresh';
import { Box, Button } from '@mui/material';
import type { DateValue } from '../types/date-value';

interface ResetProps {
  setTemporaryDate: Dispatch<SetStateAction<DateValue>>;
}

const Reset: FC<ResetProps> = ({ setTemporaryDate }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Button
        component="span"
        sx={({ palette }) => ({
          mt: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          background: palette.background.default,
          color: palette.error.main,
          cursor: 'pointer',
          width: '100px',
          '& svg': {
            fontSize: '1.2rem'
          }
        })}
        color="error"
        onClick={() => {
          setTemporaryDate([null, null]);
        }}
      >
        <span>Reset</span> <RefreshIcon />
      </Button>
    </Box>
  );
};

export default Reset;
