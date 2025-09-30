import React, { useState } from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import { ProgressTracker } from '@/@dront/components';
import { type Step } from '@/@dront/components/ProgressTracker/ProgressTracker.types';

const ProgressTrackerDemo = () => {
  const [activeStep, setActiveStep] = useState(0);

  const getStepStatus = (stepIndex: number): 'completed' | 'active' | 'inactive' => {
    if (stepIndex < activeStep) return 'completed';
    if (stepIndex === activeStep) return 'active';

    return 'inactive';
  };

  const steps: Step[] = [
    { id: 1, label: 'Input Text', status: getStepStatus(0) },
    { id: 2, label: 'Input Text', status: getStepStatus(1) },
    { id: 3, label: 'Input Text', status: getStepStatus(2) },
    { id: 4, label: 'Input Text', status: getStepStatus(3) },
    { id: 5, label: 'Input Text', status: getStepStatus(4) },
    { id: 6, label: 'Input Text', status: getStepStatus(5) }
  ];

  const nextStep = () => {
    setActiveStep(prev => Math.min(prev + 1, steps.length - 1));
  };

  const prevStep = () => {
    setActiveStep(prev => Math.max(prev - 1, 0));
  };

  const handleStepClick = (stepIndex: number) => {
    setActiveStep(stepIndex);
  };

  return (
    <Box sx={{ p: 4, maxWidth: 800, mx: 'auto' }}>
      <Typography variant="h4" gutterBottom>
        ProgressTracker Component Demo
      </Typography>

      <Typography variant="body1" paragraph>
        Interactive demo yang menunjukkan ProgressTracker component sesuai design yang diberikan. Klik pada step atau
        gunakan tombol navigasi untuk melihat perubahan status.
      </Typography>

      <Box sx={{ my: 4 }}>
        <ProgressTracker steps={steps} activeStep={activeStep} onStepClick={handleStepClick} clickable size="md" />
      </Box>

      <Stack direction="row" spacing={2} justifyContent="center">
        <Button variant="outlined" onClick={prevStep} disabled={activeStep === 0}>
          Previous
        </Button>
        <Button variant="contained" onClick={nextStep} disabled={activeStep === steps.length - 1}>
          Next
        </Button>
      </Stack>

      <Box sx={{ mt: 4, p: 2, bgcolor: 'grey.50', borderRadius: 1 }}>
        <Typography variant="h6">Current Step: {activeStep + 1}</Typography>
        <Typography variant="body2">Step Status: {steps[activeStep].status}</Typography>
      </Box>
    </Box>
  );
};

export default ProgressTrackerDemo;
