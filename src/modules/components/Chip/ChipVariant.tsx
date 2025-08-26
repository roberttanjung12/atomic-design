'use client';

import Stack from '@mui/material/Stack';
import { Chip } from '@/@dront/components';

const ChipVariant = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Chip label="Filled" color="primary" variant="filled" />
      <Chip label="Outlined" color="primary" variant="outlined" />
    </Stack>
  );
};

export default ChipVariant;
