'use client';

import React from 'react';
import { Stack } from '@mui/material';
import { ProgressBar } from '@/@dront/components';

const CircularCustomSizes = () => {
  return (
    <Stack direction="row" spacing={4} alignItems="center">
      <ProgressBar type="circular" value={50} circularSize={50} centerLabel="50px" />
      <ProgressBar type="circular" value={65} circularSize={80} centerLabel="80px" color="success" />
      <ProgressBar type="circular" value={80} circularSize={100} centerLabel="100px" color="warning" />
      <ProgressBar type="circular" value={95} circularSize={140} centerLabel="140px" color="info" />
    </Stack>
  );
};

export default CircularCustomSizes;
