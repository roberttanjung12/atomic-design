'use client';

import { Box } from '@mui/material';
import { Countdown } from '@/@dront/components';

const CountdownSeparator = () => {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Countdown targetDate="2025-12-31T23:59:59" separator="-" />
      <Countdown targetDate="2025-12-31T23:59:59" separator="|" />
      <Countdown targetDate="2025-12-31T23:59:59" separator="*" />
    </Box>
  );
};

export default CountdownSeparator;
