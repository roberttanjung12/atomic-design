'use client';

import { Box } from '@mui/material';
import { Countdown } from '@/@dront/components';

const CountdownSeparator = () => {
  const targetDate = new Date();

  targetDate.setMonth(targetDate.getMonth() + 1);

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Countdown targetDate={targetDate} separator="-" />
      <Countdown targetDate={targetDate} separator="|" />
      <Countdown targetDate={targetDate} separator="*" />
    </Box>
  );
};

export default CountdownSeparator;
