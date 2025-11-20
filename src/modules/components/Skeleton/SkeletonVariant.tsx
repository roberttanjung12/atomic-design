'use client';

import { Box } from '@mui/material';
import { Skeleton } from '@/@dront/components';

const SkeletonVariant = () => {
  return (
    <Box display="flex" flexDirection="row" alignItems="center" gap={2}>
      <Skeleton variant="square" />
      <Skeleton variant="rounded" />
      <Skeleton variant="circular" />
      <Skeleton variant="text" />
    </Box>
  );
};

export default SkeletonVariant;
