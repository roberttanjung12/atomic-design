'use client';

import { Group } from '@mui/icons-material';
import { Stack } from '@mui/material';
import Avatar from '@/@dront/components/Avatar';

const AvatarVariant = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar src="https://randomuser.me/api/portraits/men/72.jpg" alt="Image Avatar" variant="square" />
      <Avatar src="Ivan Kowalski" alt="Name Avatar" variant="rounded" />
      <Avatar src={<Group />} alt="Icon Avatar" variant="circular" />
    </Stack>
  );
};

export default AvatarVariant;
