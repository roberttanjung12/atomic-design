'use client';

import Stack from '@mui/material/Stack';
import { Chip } from '@/@dront/components';

const ChipColor = () => {
  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Default" color="default" />
      <Chip label="Primary" color="primary" />
      <Chip label="Secondary" color="secondary" />
      <Chip label="Success" color="success" />
      <Chip label="Error" color="error" />
      <Chip label="Warning" color="warning" />
      <Chip label="Info" color="info" />
    </Stack>
  );
};

export default ChipColor;
