'use client';

import { Group } from '@mui/icons-material';
import { Stack } from '@mui/material';
import Avatar from '@/@dront/components/Avatar';

const AvatarSize = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar src="https://randomuser.me/api/portraits/men/72.jpg" alt="Image Avatar" size="small" />
      <Avatar src="Ivan Kowalski" alt="Name Avatar" />
      <Avatar src={<Group />} alt="Icon Avatar" size="large" />
    </Stack>
  );
};

export default AvatarSize;
