'use client';

import React, { useState, useEffect } from 'react';
import { Stack, Button, Box } from '@mui/material';
import { ProgressBar } from '@/@dront/components';

const ProgressBarTest = () => {
  const [progress, setProgress] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning && progress < 100) {
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setIsRunning(false);

            return 100;
          }

          return prev + 1;
        });
      }, 100);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, progress]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleReset = () => {
    setProgress(0);
    setIsRunning(false);
  };

  return (
    <Stack spacing={3}>
      <Box>
        <Button variant="contained" onClick={handleStart} disabled={isRunning || progress >= 100} sx={{ mr: 2 }}>
          Start Progress
        </Button>
        <Button variant="outlined" onClick={handleReset}>
          Reset
        </Button>
      </Box>

      <ProgressBar
        value={progress}
        label="Testing progress..."
        showEstimatedTime
        estimatedTimeSeconds={Math.round((100 - progress) / 10)}
      />

      <ProgressBar value={progress} color="success" striped size="large" />

      <ProgressBar value={progress} showPercentageInside percentagePosition="center" size="large" color="warning" />
    </Stack>
  );
};

export default ProgressBarTest;
