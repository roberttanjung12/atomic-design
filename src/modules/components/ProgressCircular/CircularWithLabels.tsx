'use client';

import React from 'react';
import { Stack, Box, Typography } from '@mui/material';
import { ProgressBar } from '@/@dront/components';

const CircularWithLabels = () => {
  return (
    <Stack spacing={3}>
      <Box>
        <Typography variant="subtitle2" gutterBottom color="text.secondary">
          Upload Progress
        </Typography>
        <ProgressBar
          type="circular"
          value={75}
          label="Uploading files..."
          color="primary"
          showEstimatedTime
          estimatedTimeSeconds={45}
        />
      </Box>

      <Box>
        <Typography variant="subtitle2" gutterBottom color="text.secondary">
          Download Progress
        </Typography>
        <ProgressBar
          type="circular"
          value={30}
          label="downloading_video.mp4"
          color="info"
          showEstimatedTime
          estimatedTimeSeconds={120}
        />
      </Box>

      <Box>
        <Typography variant="subtitle2" gutterBottom color="text.secondary">
          Installation Progress
        </Typography>
        <ProgressBar type="circular" value={95} label="Installing updates..." color="success" />
      </Box>
    </Stack>
  );
};

export default CircularWithLabels;
