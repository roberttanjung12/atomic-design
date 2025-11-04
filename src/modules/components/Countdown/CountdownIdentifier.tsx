'use client';

import { Box } from '@mui/material';
import { Countdown } from '@/@dront/components';

const CountdownIdentifier = () => {
  const targetDate = new Date();

  targetDate.setMonth(targetDate.getMonth() + 1);

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Countdown targetDate={targetDate} variant="compact" identifier="d,h" />
      <Countdown targetDate={targetDate} variant="compact" identifier="d,h,m" />
      <Countdown targetDate={targetDate} variant="compact" identifier="h,m" />
      <Countdown targetDate={targetDate} variant="compact" identifier="m,s" />
    </Box>
  );
};

export default CountdownIdentifier;
