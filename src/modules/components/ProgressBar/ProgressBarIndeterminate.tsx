'use client';

import Stack from '@mui/material/Stack';
import { ProgressBar } from '@/@dront/components';

const ProgressBarIndeterminate = () => {
  return (
    <Stack spacing={2}>
      <ProgressBar value={0} indeterminate />
      <ProgressBar value={0} indeterminate color="success" />
      <ProgressBar value={0} indeterminate color="warning" striped />
    </Stack>
  );
};

export default ProgressBarIndeterminate;
