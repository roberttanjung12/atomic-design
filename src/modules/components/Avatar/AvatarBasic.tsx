'use client';

import { Group } from '@mui/icons-material';
import { Stack } from '@mui/material';
import Avatar from '@/@dront/components/Avatar';

const AvatarBasic = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar src="https://randomuser.me/api/portraits/men/72.jpg" alt="Image Avatar" />
      <Avatar src="Ivan Kowalski" alt="Name Avatar" />
      <Avatar src={<Group />} alt="Icon Avatar" />
      <Avatar src={{ alt: 'Theo Matias' }} alt="Avatar Single with Object" />
    </Stack>
  );
};

export default AvatarBasic;
