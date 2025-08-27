'use client';

import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { ProgressBar } from '@/@dront/components';

const CircularClean = () => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Clean Progress Circle
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        Progress circle tanpa label, percentage, atau text apapun. Hanya menampilkan progress visual.
      </Typography>

      <Stack spacing={3}>
        {/* Different sizes */}
        <Box>
          <Typography variant="subtitle2" gutterBottom color="text.secondary">
            Size Variations
          </Typography>
          <Stack direction="row" spacing={3} alignItems="center">
            <ProgressBar type="circular" value={25} color="primary" size="small" showPercentage={false} />
            <ProgressBar type="circular" value={50} color="primary" size="medium" showPercentage={false} />
            <ProgressBar type="circular" value={75} color="primary" size="large" showPercentage={false} />
          </Stack>
        </Box>

        {/* Different colors */}
        <Box>
          <Typography variant="subtitle2" gutterBottom color="text.secondary">
            Color Variations
          </Typography>
          <Stack direction="row" spacing={3} alignItems="center">
            <ProgressBar type="circular" value={60} color="primary" size="medium" showPercentage={false} />
            <ProgressBar type="circular" value={60} color="success" size="medium" showPercentage={false} />
            <ProgressBar type="circular" value={60} color="warning" size="medium" showPercentage={false} />
            <ProgressBar type="circular" value={60} color="error" size="medium" showPercentage={false} />
          </Stack>
        </Box>

        {/* Different progress values */}
        <Box>
          <Typography variant="subtitle2" gutterBottom color="text.secondary">
            Progress States
          </Typography>
          <Stack direction="row" spacing={3} alignItems="center">
            <ProgressBar type="circular" value={20} color="error" size="medium" showPercentage={false} />
            <ProgressBar type="circular" value={45} color="warning" size="medium" showPercentage={false} />
            <ProgressBar type="circular" value={75} color="info" size="medium" showPercentage={false} />
            <ProgressBar type="circular" value={90} color="success" size="medium" showPercentage={false} />
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default CircularClean;
