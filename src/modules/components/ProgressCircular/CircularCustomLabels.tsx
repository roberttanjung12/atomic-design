'use client';

import React from 'react';
import { Stack } from '@mui/material';
import { ProgressBar } from '@/@dront/components';

const CircularCustomLabels = () => {
  return (
    <Stack direction="row" spacing={4} alignItems="center">
      <ProgressBar type="circular" value={45} centerLabel="45%" showPercentage={false} />
      <ProgressBar type="circular" value={70} centerLabel="Loading..." showPercentage={false} color="info" />
      <ProgressBar type="circular" value={90} centerLabel="Almost Done!" showPercentage={false} color="success" />
      <ProgressBar type="circular" value={100} centerLabel="✓ Done" showPercentage={false} color="success" />
    </Stack>
  );
};

export default CircularCustomLabels;
