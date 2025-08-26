'use client';

import Stack from '@mui/material/Stack';
import { ProgressBar } from '@/@dront/components';

const ProgressBarWithTime = () => {
  return (
    <Stack spacing={3}>
      <ProgressBar value={30} showEstimatedTime estimatedTimeSeconds={8} label="Update in progress.." />
      <ProgressBar value={65} showEstimatedTime estimatedTimeSeconds={45} label="Downloading files.." color="success" />
      <ProgressBar
        value={85}
        showEstimatedTime
        estimatedTimeSeconds={120}
        label="Installing updates.."
        color="warning"
      />
    </Stack>
  );
};

export default ProgressBarWithTime;
