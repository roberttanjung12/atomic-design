'use client';

import { Box } from '@mui/material';
import { Countdown } from '@/@dront/components';

const CountdownTooltipPlacement = () => {
  const targetDate = new Date();

  targetDate.setMonth(targetDate.getMonth() + 1);

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Countdown targetDate={targetDate} variant="compact" useTooltip />
      <Countdown targetDate={targetDate} variant="compact" useTooltip tooltipPlacement="top" />
      <Countdown targetDate={targetDate} variant="compact" useTooltip tooltipPlacement="right" />
      <Countdown targetDate={targetDate} variant="compact" useTooltip tooltipPlacement="left" />
    </Box>
  );
};

export default CountdownTooltipPlacement;
