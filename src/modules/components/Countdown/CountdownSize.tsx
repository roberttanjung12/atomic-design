'use client';

import { Box } from '@mui/material';
import { Countdown } from '@/@dront/components';

const CountdownSize = () => {
  const targetDate = new Date();

  targetDate.setMonth(targetDate.getMonth() + 1);

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Countdown targetDate={targetDate} size="small" />
      <Countdown targetDate={targetDate} size={17} />
      <Countdown targetDate={targetDate} size="medium" />
      <Countdown targetDate={targetDate} size="large" />
    </Box>
  );
};

export default CountdownSize;
