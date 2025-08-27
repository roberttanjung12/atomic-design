'use client';

import Stack from '@mui/material/Stack';
import { ProgressBar } from '@/@dront/components';

const ProgressBarStriped = () => {
  return (
    <Stack spacing={2}>
      <ProgressBar value={40} striped />
      <ProgressBar value={60} striped color="success" />
      <ProgressBar value={80} striped color="warning" />
    </Stack>
  );
};

export default ProgressBarStriped;
