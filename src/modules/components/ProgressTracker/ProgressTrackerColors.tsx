import React from 'react';
import { Box, Stack } from '@mui/material';
import { ProgressTracker } from '@/@dront/components';

const ColorsExample = () => {
  const steps = [
    { id: 1, label: 'Step 1', status: 'completed' as const },
    { id: 2, label: 'Step 2', status: 'active' as const },
    { id: 3, label: 'Step 3', status: 'inactive' as const },
    { id: 4, label: 'Step 4', status: 'inactive' as const }
  ];

  return (
    <Stack spacing={4}>
      <Box>
        <h4>Primary (Default)</h4>
        <ProgressTracker steps={steps} color="primary" />
      </Box>

      <Box>
        <h4>Secondary</h4>
        <ProgressTracker steps={steps} color="secondary" />
      </Box>

      <Box>
        <h4>Success</h4>
        <ProgressTracker steps={steps} color="success" />
      </Box>

      <Box>
        <h4>Warning</h4>
        <ProgressTracker steps={steps} color="warning" />
      </Box>

      <Box>
        <h4>Error</h4>
        <ProgressTracker steps={steps} color="error" />
      </Box>
    </Stack>
  );
};

export default ColorsExample;
