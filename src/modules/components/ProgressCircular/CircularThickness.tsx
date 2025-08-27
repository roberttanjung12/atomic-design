'use client';

import React from 'react';
import { Stack } from '@mui/material';
import { ProgressBar } from '@/@dront/components';

const CircularThickness = () => {
  return (
    <Stack direction="row" spacing={4} alignItems="center">
      <ProgressBar type="circular" value={60} thickness={2} centerLabel="Thin" />
      <ProgressBar type="circular" value={60} thickness={4} centerLabel="Normal" color="success" />
      <ProgressBar type="circular" value={60} thickness={6} centerLabel="Thick" color="warning" />
      <ProgressBar type="circular" value={60} thickness={8} centerLabel="Extra" color="error" />
    </Stack>
  );
};

export default CircularThickness;
