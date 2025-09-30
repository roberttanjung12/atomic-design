import React from 'react';
import { Box, Stack } from '@mui/material';
import { ProgressTracker } from '@/@dront/components';

const SizesExample = () => {
  const steps = [
    { id: 1, label: 'Step 1', status: 'completed' as const },
    { id: 2, label: 'Step 2', status: 'active' as const },
    { id: 3, label: 'Step 3', status: 'inactive' as const },
    { id: 4, label: 'Step 4', status: 'inactive' as const }
  ];

  return (
    <Stack spacing={4}>
      <Box>
        <h4>Small Size</h4>
        <ProgressTracker steps={steps} size="sm" />
      </Box>

      <Box>
        <h4>Medium Size (Default)</h4>
        <ProgressTracker steps={steps} size="md" />
      </Box>

      <Box>
        <h4>Large Size</h4>
        <ProgressTracker steps={steps} size="lg" />
      </Box>
    </Stack>
  );
};

export default SizesExample;
