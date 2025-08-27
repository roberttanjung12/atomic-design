'use client';

import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { ProgressBar } from '@/@dront/components';

const CircularSpecialCases = () => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Special Layout Examples
      </Typography>

      <Stack spacing={4}>
        {/* 1. Circle tanpa label */}
        <Box>
          <Typography variant="subtitle2" gutterBottom color="text.secondary">
            1. Clean Circle (No Labels)
          </Typography>
          <Stack direction="row" spacing={3} alignItems="center">
            <ProgressBar
              type="circular"
              value={40}
              color="primary"
              size="large"
              // Tidak ada centerLabel, tidak ada label
            />
            <ProgressBar type="circular" value={65} color="success" size="medium" />
            <ProgressBar type="circular" value={80} color="warning" size="small" />
          </Stack>
        </Box>

        {/* 2. Progress percentage di sebelah kiri circle */}
        <Box>
          <Typography variant="subtitle2" gutterBottom color="text.secondary">
            2. Percentage on Left Side
          </Typography>
          <Stack spacing={3}>
            {/* Large with percentage on left */}
            <Stack direction="row" spacing={2} alignItems="center">
              <Typography variant="h4" color="primary" sx={{ minWidth: 60, textAlign: 'right' }}>
                40%
              </Typography>
              <ProgressBar
                type="circular"
                value={40}
                color="primary"
                size="large"
                showPercentage={false} // Hide internal percentage
              />
              <Typography variant="body2" color="text.secondary">
                Task Progress
              </Typography>
            </Stack>

            {/* Medium with percentage on left */}
            <Stack direction="row" spacing={2} alignItems="center">
              <Typography variant="h5" color="success.main" sx={{ minWidth: 60, textAlign: 'right' }}>
                65%
              </Typography>
              <ProgressBar type="circular" value={65} color="success" size="medium" showPercentage={false} />
              <Typography variant="body2" color="text.secondary">
                Upload Progress
              </Typography>
            </Stack>

            {/* Small with percentage on left */}
            <Stack direction="row" spacing={2} alignItems="center">
              <Typography variant="h6" color="warning.main" sx={{ minWidth: 60, textAlign: 'right' }}>
                80%
              </Typography>
              <ProgressBar type="circular" value={80} color="warning" size="small" showPercentage={false} />
              <Typography variant="body2" color="text.secondary">
                Battery Level
              </Typography>
            </Stack>

            {/* Custom size with percentage on left */}
            <Stack direction="row" spacing={2} alignItems="center">
              <Typography variant="h3" color="error.main" sx={{ minWidth: 60, textAlign: 'right' }}>
                25%
              </Typography>
              <ProgressBar
                type="circular"
                value={25}
                color="error"
                circularSize={80}
                thickness={8}
                showPercentage={false}
              />
              <Typography variant="body2" color="text.secondary">
                Storage Used
              </Typography>
            </Stack>
          </Stack>
        </Box>

        {/* 3. Mixed Layout Examples */}
        <Box>
          <Typography variant="subtitle2" gutterBottom color="text.secondary">
            3. Mixed Layout Styles
          </Typography>
          <Stack direction="row" spacing={4} flexWrap="wrap" useFlexGap>
            {/* Clean circle */}
            <Stack alignItems="center" spacing={1}>
              <ProgressBar type="circular" value={90} color="success" size="medium" />
              <Typography variant="caption">Clean</Typography>
            </Stack>

            {/* Percentage left */}
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography variant="h6" color="info.main" sx={{ minWidth: 40, textAlign: 'right' }}>
                75%
              </Typography>
              <Stack alignItems="center" spacing={1}>
                <ProgressBar type="circular" value={75} color="info" size="medium" showPercentage={false} />
                <Typography variant="caption">Left %</Typography>
              </Stack>
            </Stack>

            {/* Center label */}
            <Stack alignItems="center" spacing={1}>
              <ProgressBar type="circular" value={60} color="secondary" size="medium" centerLabel="60%" />
              <Typography variant="caption">Center</Typography>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default CircularSpecialCases;
