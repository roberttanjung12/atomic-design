'use client';

import React from 'react';
import { Stack } from '@mui/material';
import { ProgressBar } from '@/@dront/components';

const CircularIndeterminate = () => {
  return (
    <Stack direction="row" spacing={4} alignItems="center">
      <ProgressBar type="circular" value={0} indeterminate />
      <ProgressBar type="circular" value={0} indeterminate color="success" />
      <ProgressBar type="circular" value={0} indeterminate color="warning" />
      <ProgressBar type="circular" value={0} indeterminate color="error" centerLabel="Loading..." />
    </Stack>
  );
};

export default CircularIndeterminate;
