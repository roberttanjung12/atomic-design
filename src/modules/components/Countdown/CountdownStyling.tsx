'use client';

import { Box } from '@mui/material';
import { Countdown } from '@/@dront/components';

const CountdownStyling = () => {
  const targetDate = new Date();

  targetDate.setMonth(targetDate.getMonth() + 1);

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Countdown
        targetDate={targetDate}
        sx={{
          color: 'text.primary',
          alignItems: 'center'
        }}
        numberSx={{
          color: 'primary.main',
          fontWeight: 700,
          fontSize: '1.5rem'
        }}
        labelSx={{
          color: 'text.secondary',
          fontSize: '0.75rem',
          textTransform: 'uppercase'
        }}
        dayNumberSx={{
          color: 'warning.main'
        }}
        hourNumberSx={{
          color: 'info.main'
        }}
        minNumberSx={{
          color: 'success.main'
        }}
        secNumberSx={{
          color: 'error.main'
        }}
        dayLabelSx={{
          color: 'warning.dark'
        }}
        hourLabelSx={{
          color: 'info.dark'
        }}
        minLabelSx={{
          color: 'success.dark'
        }}
        secLabelSx={{
          color: 'error.dark'
        }}
      />

      <Countdown
        targetDate={targetDate}
        variant="compact"
        sx={{
          color: 'text.primary',
          alignItems: 'center'
        }}
        numberSx={{
          color: 'primary.main',
          fontWeight: 700,
          fontSize: '1.5rem'
        }}
        labelSx={{
          color: 'text.secondary',
          fontSize: '0.75rem',
          textTransform: 'uppercase'
        }}
        dayNumberSx={{
          color: 'warning.main'
        }}
        hourNumberSx={{
          color: 'info.main'
        }}
        minNumberSx={{
          color: 'success.main'
        }}
        secNumberSx={{
          color: 'error.main'
        }}
        dayLabelSx={{
          color: 'warning.dark'
        }}
        hourLabelSx={{
          color: 'info.dark'
        }}
        minLabelSx={{
          color: 'success.dark'
        }}
        secLabelSx={{
          color: 'error.dark'
        }}
      />

      <Countdown
        targetDate={targetDate}
        variant="block"
        direction="horizontal"
        sx={{
          color: 'text.primary',
          alignItems: 'center'
        }}
        numberSx={{
          color: 'primary.main',
          fontWeight: 700,
          fontSize: '1.5rem'
        }}
        labelSx={{
          color: 'text.secondary',
          fontSize: '0.75rem',
          textTransform: 'uppercase'
        }}
        dayNumberSx={{
          color: 'warning.main'
        }}
        hourNumberSx={{
          color: 'info.main'
        }}
        minNumberSx={{
          color: 'success.main'
        }}
        secNumberSx={{
          color: 'error.main'
        }}
        dayLabelSx={{
          color: 'warning.dark'
        }}
        hourLabelSx={{
          color: 'info.dark'
        }}
        minLabelSx={{
          color: 'success.dark'
        }}
        secLabelSx={{
          color: 'error.dark'
        }}
      />
    </Box>
  );
};

export default CountdownStyling;
