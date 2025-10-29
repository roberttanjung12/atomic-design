'use client';

import { Box } from '@mui/material';
import { Countdown } from '@/@dront/components';

const CountdownShowOnly = () => {
  const targetDate = new Date();

  targetDate.setMonth(targetDate.getMonth() + 1);

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Countdown targetDate={targetDate} />

      <Countdown targetDate={targetDate} variant="block" direction="horizontal" showOnly="day" />
      <Countdown targetDate={targetDate} showOnly="hour" />
      <Countdown targetDate={targetDate} showOnly="min" />
      <Countdown targetDate={targetDate} showOnly="sec" />
    </Box>
  );
};

export default CountdownShowOnly;
