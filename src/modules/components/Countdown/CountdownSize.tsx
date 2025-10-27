'use client';

import { Box } from '@mui/material';
import { Countdown } from '@/@dront/components';

const CountdownSize = () => {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Countdown targetDate={new Date('2025-12-31T23:59:59')} size="small" />
      <Countdown targetDate={new Date('2025-12-31T23:59:59')} size="medium" />
      <Countdown targetDate={new Date('2025-12-31T23:59:59')} size="large" />
    </Box>
  );
};

export default CountdownSize;
