'use client';

import Stack from '@mui/material/Stack';
import { ProgressBar } from '@/@dront/components';

const ProgressBarColors = () => {
  return (
    <Stack spacing={2}>
      <ProgressBar value={30} color="primary" />
      <ProgressBar value={45} color="secondary" />
      <ProgressBar value={60} color="success" />
      <ProgressBar value={75} color="warning" />
      <ProgressBar value={90} color="error" />
      <ProgressBar value={50} color="info" />
    </Stack>
  );
};

export default ProgressBarColors;
