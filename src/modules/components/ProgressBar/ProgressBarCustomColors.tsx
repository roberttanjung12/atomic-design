'use client';

import Stack from '@mui/material/Stack';
import { ProgressBar } from '@/@dront/components';

const ProgressBarCustomColors = () => {
  return (
    <Stack spacing={3}>
      <ProgressBar value={30} percentageColor="primary" label="Default primary color" />
      <ProgressBar value={45} percentageColor="success" label="Success color percentage" color="success" />
      <ProgressBar value={60} percentageColor="warning" label="Warning color percentage" color="warning" />
      <ProgressBar value={75} percentageColor="error" label="Error color percentage" color="error" />
      <ProgressBar value={90} percentageColor="text.secondary" label="Secondary text color" color="info" />
    </Stack>
  );
};

export default ProgressBarCustomColors;
