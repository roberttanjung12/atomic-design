import React from 'react';
import { Box } from '@mui/material';
import { ProgressTracker } from '@/@dront/components';

const VerticalExample = () => {
  const steps = [
    {
      id: 1,
      label: 'Account Setup',
      description: 'Create your account',
      status: 'completed' as const
    },
    {
      id: 2,
      label: 'Profile Information',
      description: 'Add your personal details',
      status: 'active' as const
    },
    {
      id: 3,
      label: 'Verification',
      description: 'Verify your email',
      status: 'inactive' as const
    },
    {
      id: 4,
      label: 'Complete',
      description: 'Setup finished',
      status: 'inactive' as const
    }
  ];

  return (
    <Box
      sx={{
        height: 600,
        width: '100%',
        overflow: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 2
      }}
    >
      <ProgressTracker steps={steps} orientation="vertical" showDescriptions clickable />
    </Box>
  );
};

export default VerticalExample;
