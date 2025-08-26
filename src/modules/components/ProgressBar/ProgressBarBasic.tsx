'use client';

import Stack from '@mui/material/Stack';
import { ProgressBar } from '@/@dront/components';

const ProgressBarBasic = () => {
  return (
    <Stack spacing={3}>
      <ProgressBar value={30} />
      <ProgressBar value={65} color="success" radius="sm" />
      <ProgressBar value={85} color="warning" radius="md" />
      <ProgressBar value={45} color="error" radius="lg" />
    </Stack>
  );
};

export default ProgressBarBasic;
