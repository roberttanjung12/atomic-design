'use client';

import React, { useState, useEffect } from 'react';
import { Stack, Button, Box } from '@mui/material';
import { ProgressBar } from '@/@dront/components';

const CircularTest = () => {
  const [progress, setProgress] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning && progress < 100) {
      interval = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev + Math.random() * 15;

          return newProgress >= 100 ? 100 : newProgress;
        });
      }, 800);
    } else if (progress >= 100) {
      setIsRunning(false);
    }

    return () => clearInterval(interval);
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

      <Stack direction="row" spacing={4} alignItems="center">
        <ProgressBar
          type="circular"
          value={progress}
          label="Test Progress"
          color="primary"
          showEstimatedTime
          estimatedTimeSeconds={Math.round((100 - progress) / 10)}
        />

        <ProgressBar type="circular" value={progress} color="success" size="large" />

        <ProgressBar type="circular" value={progress} centerLabel="Custom" color="warning" thickness={6} />

        <ProgressBar type="circular" value={progress} color="info" showBackground={false} />
      </Stack>
    </Stack>
  );
};

export default CircularTest;
