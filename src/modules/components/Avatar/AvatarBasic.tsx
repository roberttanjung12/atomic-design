'use client';

import { Group } from '@mui/icons-material';
import { Stack } from '@mui/material';
import Avatar from '@/@dront/components/Avatar';

const AvatarBasic = () => {
  const onClick = () => {
    console.log('Avatar Clicked');
  };

  return (
    <Stack direction="row" spacing={2}>
      <Avatar src="https://randomuser.me/api/portraits/men/72.jpg" alt="Image Avatar" onClick={onClick} />
      <Avatar src="Ivan Kowalski" alt="Name Avatar" onClick={onClick} />
      <Avatar src={<Group />} alt="Icon Avatar" onClick={onClick} />
    </Stack>
  );
};

export default AvatarBasic;
