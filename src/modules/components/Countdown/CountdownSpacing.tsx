'use client';

import { Box } from '@mui/material';
import { Countdown } from '@/@dront/components';

const CountdownSpacing = () => {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Countdown targetDate={new Date('2025-12-31T23:59:59')} spacing={1} />
      <Countdown targetDate={new Date('2025-12-31T23:59:59')} spacing={2} />
      <Countdown targetDate={new Date('2025-12-31T23:59:59')} spacing={3} />
    </Box>
  );
};

export default CountdownSpacing;
