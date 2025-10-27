'use client';

import { Box } from '@mui/material';
import { Countdown } from '@/@dront/components';

const CountdownBlockDirection = () => {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Countdown targetDate={new Date('2025-12-31T23:59:59')} variant="block" />
      <Countdown targetDate={new Date('2025-12-31T23:59:59')} variant="block" direction="horizontal" />
    </Box>
  );
};

export default CountdownBlockDirection;
