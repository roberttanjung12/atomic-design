'use client';

import React from 'react';
import { Stack } from '@mui/material';
import { ProgressBar } from '@/@dront/components';

const CircularSizes = () => {
  return (
    <Stack direction="row" spacing={4} alignItems="center">
      <ProgressBar type="circular" value={60} size="small" />
      <ProgressBar type="circular" value={60} size="medium" />
      <ProgressBar type="circular" value={60} size="large" />
    </Stack>
  );
};

export default CircularSizes;
