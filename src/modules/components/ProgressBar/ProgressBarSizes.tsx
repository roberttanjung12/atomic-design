'use client';

import Stack from '@mui/material/Stack';
import { ProgressBar } from '@/@dront/components';

const ProgressBarSizes = () => {
  return (
    <Stack spacing={3}>
      <ProgressBar value={45} size="small" />
      <ProgressBar value={45} size="medium" />
      <ProgressBar value={45} size="large" />
    </Stack>
  );
};

export default ProgressBarSizes;
