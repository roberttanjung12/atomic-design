import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { ProgressBar } from '@/@dront/components';

const SimpleUploadExample = () => {
  return (
    <Stack spacing={4}>
      <Box>
        <Typography variant="h6" gutterBottom>
          Upload File Examples (Like the Image)
        </Typography>

        <Stack spacing={3}>
          {/* Basic Upload - exactly like the attached image */}
          <Box>
            <Typography variant="subtitle2" gutterBottom color="text.secondary">
              Basic Upload Progress - 50%
            </Typography>
            <ProgressBar value={50} label="Upload File" color="primary" radius="sm" showPercentage />
          </Box>

          {/* Variations */}
          <Box>
            <Typography variant="subtitle2" gutterBottom color="text.secondary">
              Large File Upload - 25%
            </Typography>
            <ProgressBar
              value={25}
              label="video_large.mp4"
              color="info"
              radius="md"
              showEstimatedTime
              estimatedTimeSeconds={180}
            />
          </Box>

          <Box>
            <Typography variant="subtitle2" gutterBottom color="text.secondary">
              Document Upload - 75%
            </Typography>
            <ProgressBar
              value={75}
              label="presentation.pptx"
              color="success"
              radius="lg"
              showEstimatedTime
              estimatedTimeSeconds={30}
            />
          </Box>

          <Box>
            <Typography variant="subtitle2" gutterBottom color="text.secondary">
              Image Upload - Completed
            </Typography>
            <ProgressBar value={100} label="photo.jpg - Upload completed" color="success" radius="xl" />
          </Box>

          <Box>
            <Typography variant="subtitle2" gutterBottom color="text.secondary">
              Upload with Animation
            </Typography>
            <ProgressBar
              value={40}
              label="archive.zip"
              color="primary"
              radius={15}
              striped
              showEstimatedTime
              estimatedTimeSeconds={90}
            />
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
};

export default SimpleUploadExample;
