'use client';

import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Chip } from '@/@dront/components';

const ChipAvatar = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Chip label="User" color="primary" avatar={<Avatar>U</Avatar>} />
      <Chip label="Admin" color="secondary" avatar={<Avatar>A</Avatar>} />
    </Stack>
  );
};

export default ChipAvatar;
