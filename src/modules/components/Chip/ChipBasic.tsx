'use client';

import Stack from '@mui/material/Stack';
import { Chip } from '@/@dront/components';

const ChipBasic = () => {
  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Default" />
      <Chip label="Primary" color="primary" />
      <Chip label="Secondary" color="secondary" />
    </Stack>
  );
};

export default ChipBasic;
