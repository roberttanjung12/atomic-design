'use client';

import { Box } from '@mui/material';
import { Countdown } from '@/@dront/components';

const CountdownTooltip = () => {
  const targetDate = new Date();

  targetDate.setMonth(targetDate.getMonth() + 1);

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Countdown targetDate={targetDate} variant="compact" tooltip />
      <Countdown targetDate={targetDate} variant="compact" tooltip={true} />
      <Countdown targetDate={targetDate} variant="compact" tooltip={false} />
    </Box>
  );
};

export default CountdownTooltip;
