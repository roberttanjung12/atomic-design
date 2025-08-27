'use client';

import React from 'react';
import { Stack } from '@mui/material';
import { ProgressBar } from '@/@dront/components';

const CircularBasic = () => {
  return (
    <Stack direction="row" spacing={4} alignItems="center">
      <ProgressBar type="circular" value={40} />
      <ProgressBar type="circular" value={65} color="success" />
      <ProgressBar type="circular" value={85} color="warning" />
      <ProgressBar type="circular" value={25} color="error" />
    </Stack>
  );
};

export default CircularBasic;
