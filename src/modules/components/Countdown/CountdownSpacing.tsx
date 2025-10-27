'use client';

import { Box } from '@mui/material';
import { Countdown } from '@/@dront/components';

const CountdownSpacing = () => {
  const targetDate = new Date();

  targetDate.setMonth(targetDate.getMonth() + 1);

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Countdown targetDate={targetDate} spacing={1} />
      <Countdown targetDate={targetDate} spacing={1.5} />
      <Countdown targetDate={targetDate} spacing={2.5} />
    </Box>
  );
};

export default CountdownSpacing;
