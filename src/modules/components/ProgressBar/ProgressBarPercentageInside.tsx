'use client';

import Stack from '@mui/material/Stack';
import { ProgressBar } from '@/@dront/components';

const ProgressBarPercentageInside = () => {
  return (
    <Stack spacing={3}>
      <ProgressBar value={45} showPercentageInside percentagePosition="left" size="large" />
      <ProgressBar value={65} showPercentageInside percentagePosition="center" size="large" color="success" />
      <ProgressBar value={85} showPercentageInside percentagePosition="right" size="large" color="warning" />
    </Stack>
  );
};

export default ProgressBarPercentageInside;
