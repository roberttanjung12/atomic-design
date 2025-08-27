'use client';

import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { ProgressBar } from '@/@dront/components';

const CircularExternalPercentage = () => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        External Percentage Display
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        Progress circle dengan percentage ditampilkan di luar (sebelah kiri) circle.
      </Typography>

      <Stack spacing={4}>
        {/* Large examples */}
        <Box>
          <Typography variant="subtitle2" gutterBottom color="text.secondary">
            Large Size Examples
          </Typography>
          <Stack spacing={3}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Typography variant="h4" color="primary" sx={{ minWidth: 70, textAlign: 'right' }}>
                25%
              </Typography>
              <ProgressBar type="circular" value={25} color="primary" size="large" showPercentage={false} />
              <Typography variant="body2" color="text.secondary">
                Initial Stage
              </Typography>
            </Stack>

            <Stack direction="row" spacing={2} alignItems="center">
              <Typography variant="h4" color="warning.main" sx={{ minWidth: 70, textAlign: 'right' }}>
                65%
              </Typography>
              <ProgressBar type="circular" value={65} color="warning" size="large" showPercentage={false} />
              <Typography variant="body2" color="text.secondary">
                In Progress
              </Typography>
            </Stack>

            <Stack direction="row" spacing={2} alignItems="center">
              <Typography variant="h4" color="success.main" sx={{ minWidth: 70, textAlign: 'right' }}>
                90%
              </Typography>
              <ProgressBar type="circular" value={90} color="success" size="large" showPercentage={false} />
              <Typography variant="body2" color="text.secondary">
                Almost Complete
              </Typography>
            </Stack>
          </Stack>
        </Box>

        {/* Medium examples */}
        <Box>
          <Typography variant="subtitle2" gutterBottom color="text.secondary">
            Medium Size Examples
          </Typography>
          <Stack spacing={3}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Typography variant="h5" color="info.main" sx={{ minWidth: 60, textAlign: 'right' }}>
                40%
              </Typography>
              <ProgressBar type="circular" value={40} color="info" size="medium" showPercentage={false} />
              <Typography variant="body2" color="text.secondary">
                Upload Progress
              </Typography>
            </Stack>

            <Stack direction="row" spacing={2} alignItems="center">
              <Typography variant="h5" color="secondary.main" sx={{ minWidth: 60, textAlign: 'right' }}>
                75%
              </Typography>
              <ProgressBar type="circular" value={75} color="secondary" size="medium" showPercentage={false} />
              <Typography variant="body2" color="text.secondary">
                Download Progress
              </Typography>
            </Stack>
          </Stack>
        </Box>

        {/* Custom size examples */}
        <Box>
          <Typography variant="subtitle2" gutterBottom color="text.secondary">
            Custom Size with Thick Border
          </Typography>
          <Stack spacing={3}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Typography variant="h3" color="error.main" sx={{ minWidth: 80, textAlign: 'right' }}>
                15%
              </Typography>
              <ProgressBar
                type="circular"
                value={15}
                color="error"
                circularSize={100}
                thickness={10}
                showPercentage={false}
              />
              <Typography variant="body2" color="text.secondary">
                Battery Low
              </Typography>
            </Stack>

            <Stack direction="row" spacing={2} alignItems="center">
              <Typography variant="h3" color="success.main" sx={{ minWidth: 80, textAlign: 'right' }}>
                85%
              </Typography>
              <ProgressBar
                type="circular"
                value={85}
                color="success"
                circularSize={100}
                thickness={10}
                showPercentage={false}
              />
              <Typography variant="body2" color="text.secondary">
                Storage Used
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default CircularExternalPercentage;
