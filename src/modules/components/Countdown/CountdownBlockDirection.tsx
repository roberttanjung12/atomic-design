'use client';

import { Box } from '@mui/material';
import { Countdown } from '@/@dront/components';

const CountdownBlockDirection = () => {
  const targetDate = new Date();

  targetDate.setMonth(targetDate.getMonth() + 1);

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Countdown targetDate={targetDate} variant="block" />
      <Countdown targetDate={targetDate} variant="block" direction="horizontal" />
    </Box>
  );
};

export default CountdownBlockDirection;
