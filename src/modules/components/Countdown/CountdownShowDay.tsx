'use client';

import { Box } from '@mui/material';
import { Countdown } from '@/@dront/components';

const CountdownShowDay = () => {
  const targetDate = new Date();

  targetDate.setMonth(targetDate.getMonth() + 1);

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Countdown targetDate={targetDate} />
      <Countdown targetDate={targetDate} showDays={false} />
    </Box>
  );
};

export default CountdownShowDay;
