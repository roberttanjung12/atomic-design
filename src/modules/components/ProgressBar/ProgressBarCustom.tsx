'use client';

import Stack from '@mui/material/Stack';
import { ProgressBar } from '@/@dront/components';

const ProgressBarCustom = () => {
  return (
    <Stack spacing={3}>
      <ProgressBar value={45} label="Downloading..." radius="sm" />
      <ProgressBar value={75} label="Installing..." color="success" radius="md" />
      <ProgressBar value={30} showPercentage={false} label="Uploading files" color="info" radius="lg" />
      <ProgressBar value={60} height={16} color="warning" label="Processing..." radius="xl" />
      <ProgressBar value={90} size="large" label="Almost done!" color="success" radius={25} />
    </Stack>
  );
};

export default ProgressBarCustom;
