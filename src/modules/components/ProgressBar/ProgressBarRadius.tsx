import React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ProgressBar } from '@/@dront/components';

const ProgressBarRadius = () => {
  return (
    <Stack spacing={3}>
      <Typography variant="h6" gutterBottom>
        No Radius (Default)
      </Typography>
      <ProgressBar value={60} label="Default - No radius" />

      <Typography variant="h6" gutterBottom>
        Preset Radius Sizes
      </Typography>
      <ProgressBar value={30} radius="sm" label="Small radius (4px)" color="primary" />
      <ProgressBar value={45} radius="md" label="Medium radius (8px)" color="success" />
      <ProgressBar value={60} radius="lg" label="Large radius (12px)" color="warning" />
      <ProgressBar value={75} radius="xl" label="Extra large radius (16px)" color="error" />

      <Typography variant="h6" gutterBottom>
        Custom Radius Values
      </Typography>
      <ProgressBar value={40} radius={2} label="Custom 2px radius" color="info" />
      <ProgressBar value={55} radius={20} label="Custom 20px radius" color="secondary" />
      <ProgressBar value={70} radius={50} label="Custom 50px radius (pill shape)" color="success" size="large" />
    </Stack>
  );
};

export default ProgressBarRadius;
