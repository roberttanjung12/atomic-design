'use client';

import Stack from '@mui/material/Stack';
import { Chip } from '@/@dront/components';

const ChipSize = () => {
  return (
    <Stack direction="row" spacing={2} alignItems="flex-end">
      <Chip label="Chip Small" size="small" color="primary" />
      <Chip label="Chip Medium" size="medium" color="primary" />
      <Chip label="Chip Large" size="large" color="primary" />
    </Stack>
  );
};

export default ChipSize;
