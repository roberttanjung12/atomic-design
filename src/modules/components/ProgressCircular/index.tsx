'use client';

import React from 'react';
import { Box, Typography, Paper, Stack, Divider } from '@mui/material';

// Basic Circular Progress Examples
import CircularBasic from './CircularBasic';

// Clean Progress Circle
import CircularClean from './CircularClean';

// Color Variants
import CircularColors from './CircularColors';

// Custom Labels in Center
import CircularCustomLabels from './CircularCustomLabels';

// Custom Sizes
import CircularCustomSizes from './CircularCustomSizes';

// External Percentage Display
import CircularExternalPercentage from './CircularExternalPercentage';

// Indeterminate Progress
import CircularIndeterminate from './CircularIndeterminate';

// Special Layout Cases
import CircularSizes from './CircularSizes';
import CircularSpecialCases from './CircularSpecialCases';

// Size Variations

// Interactive Test
import CircularTest from './CircularTest';

// Custom Thickness
import CircularThickness from './CircularThickness';

// With Labels and Percentage
import CircularWithLabels from './CircularWithLabels';

const ProgressCircularModule = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Progress Circular Documentation
      </Typography>
      <Typography variant="body1" paragraph>
        Progress Circular menampilkan progress dalam bentuk lingkaran. Komponen ini mendukung berbagai props untuk
        kustomisasi seperti ukuran, ketebalan, warna, dan label.
      </Typography>

      <Paper elevation={1} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          Basic Usage
        </Typography>
        <CircularBasic />
      </Paper>

      <Paper elevation={1} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          Clean Progress Circle
        </Typography>
        <CircularClean />
      </Paper>

      <Paper elevation={1} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          External Percentage Display
        </Typography>
        <CircularExternalPercentage />
      </Paper>

      <Paper elevation={1} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          Special Layout Cases
        </Typography>
        <CircularSpecialCases />
      </Paper>

      <Paper elevation={1} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          Size Variations
        </Typography>
        <CircularSizes />
      </Paper>

      <Paper elevation={1} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          Custom Thickness
        </Typography>
        <CircularThickness />
      </Paper>

      <Paper elevation={1} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          With Labels and Percentage
        </Typography>
        <CircularWithLabels />
      </Paper>

      <Paper elevation={1} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          Custom Center Labels
        </Typography>
        <CircularCustomLabels />
      </Paper>

      <Paper elevation={1} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          Custom Sizes
        </Typography>
        <CircularCustomSizes />
      </Paper>

      <Paper elevation={1} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          Indeterminate Progress
        </Typography>
        <CircularIndeterminate />
      </Paper>

      <Paper elevation={1} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          Color Variants
        </Typography>
        <CircularColors />
      </Paper>

      <Paper elevation={1} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          Interactive Test
        </Typography>
        <CircularTest />
      </Paper>

      <Divider sx={{ my: 4 }} />

      <Box>
        <Typography variant="h5" gutterBottom>
          Available Props for Circular Progress
        </Typography>
        <Stack spacing={2}>
          <Box>
            <Typography variant="h6">type</Typography>
            <Typography variant="body2" color="text.secondary">
              Set to "circular" to enable circular progress mode.
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6">value</Typography>
            <Typography variant="body2" color="text.secondary">
              Progress value (0-100). Required for determinate progress.
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6">color</Typography>
            <Typography variant="body2" color="text.secondary">
              Color variant: "primary" | "secondary" | "success" | "error" | "warning" | "info"
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6">size</Typography>
            <Typography variant="body2" color="text.secondary">
              Size preset: "small" | "medium" | "large"
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6">circularSize</Typography>
            <Typography variant="body2" color="text.secondary">
              Custom size in pixels (number). Overrides size prop.
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6">thickness</Typography>
            <Typography variant="body2" color="text.secondary">
              Stroke thickness (1-10). Default is 4.
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6">centerLabel</Typography>
            <Typography variant="body2" color="text.secondary">
              Custom label to display in the center of the circle.
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6">showBackground</Typography>
            <Typography variant="body2" color="text.secondary">
              Whether to show background circle. Default is true.
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6">label</Typography>
            <Typography variant="body2" color="text.secondary">
              Label text displayed outside the circle.
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6">showEstimatedTime</Typography>
            <Typography variant="body2" color="text.secondary">
              Whether to show estimated time remaining.
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6">estimatedTimeSeconds</Typography>
            <Typography variant="body2" color="text.secondary">
              Estimated time in seconds for completion.
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default ProgressCircularModule;
