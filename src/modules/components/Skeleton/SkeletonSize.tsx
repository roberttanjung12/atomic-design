'use client';

import { Box } from '@mui/material';
import { Skeleton } from '@/@dront/components';

const SkeletonSize = () => {
  return (
    <Box display="flex" flexDirection="row" alignItems="center" gap={2}>
      <Skeleton variant="square" width={50} height={50} />
      <Skeleton variant="rounded" width={60} height={60} />
      <Skeleton variant="circular" width={70} height={70} />
      <Skeleton variant="text" width={150} />
    </Box>
  );
};

export default SkeletonSize;
