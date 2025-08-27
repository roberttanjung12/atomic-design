import React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ProgressBar } from '@/@dront/components';

const ProgressBarRadiusTest = () => {
  return (
    <Stack spacing={3}>
      <Typography variant="h5" gutterBottom>
        ProgressBar Radius Test
      </Typography>

      <ProgressBar value={50} label="No radius (default)" />
      <ProgressBar value={50} radius="sm" label="Small radius" color="success" />
      <ProgressBar value={50} radius="md" label="Medium radius" color="warning" />
      <ProgressBar value={50} radius="lg" label="Large radius" color="error" />
      <ProgressBar value={50} radius="xl" label="Extra large radius" color="info" />
      <ProgressBar value={50} radius={25} label="Custom 25px radius" color="secondary" />
      <ProgressBar value={75} radius={50} label="Pill shape (50px radius)" size="large" color="success" />
    </Stack>
  );
};

export default ProgressBarRadiusTest;
