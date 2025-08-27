'use client';

import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { ProgressBar } from '@/@dront/components';

const CircularColors = () => {
  const colorVariants = [
    { color: 'primary', label: 'Primary' },
    { color: 'secondary', label: 'Secondary' },
    { color: 'success', label: 'Success' },
    { color: 'error', label: 'Error' },
    { color: 'warning', label: 'Warning' },
    { color: 'info', label: 'Info' }
  ] as const;

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Color Variants
      </Typography>
      <Stack direction="row" spacing={3} flexWrap="wrap" useFlexGap>
        {colorVariants.map(({ color, label }) => (
          <Stack key={color} alignItems="center" spacing={1}>
            <ProgressBar type="circular" value={75} color={color} />
            <Typography variant="caption">{label}</Typography>
          </Stack>
        ))}
      </Stack>

      <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
        Color with Custom Labels
      </Typography>
      <Stack direction="row" spacing={3} flexWrap="wrap" useFlexGap>
        {colorVariants.map(({ color, label }) => (
          <Stack key={color} alignItems="center" spacing={1}>
            <ProgressBar type="circular" value={60} color={color} centerLabel={label} />
            <Typography variant="caption">{label} with Label</Typography>
          </Stack>
        ))}
      </Stack>

      <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
        Color with Background
      </Typography>
      <Stack direction="row" spacing={3} flexWrap="wrap" useFlexGap>
        {colorVariants.slice(0, 3).map(({ color, label }) => (
          <Stack key={color} alignItems="center" spacing={1}>
            <ProgressBar type="circular" value={45} color={color} showBackground />
            <Typography variant="caption">{label} with BG</Typography>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default CircularColors;
