'use client';

import { FolderCopyOutlined } from '@mui/icons-material';
import { Stack } from '@mui/material';
import Avatar from '@/@dront/components/Avatar';
import type { AvatarItem } from '@/@dront/components/Avatar/Avatar.types';

const AvatarSpacing = () => {
  const dummy: AvatarItem[] = [
    {
      alt: 'Initial Text'
    },
    {
      img: 'https://randomuser.me/api/portraits/men/72.jpg',
      alt: 'Image Profile'
    },
    {
      icon: <FolderCopyOutlined />,
      alt: 'Icon Folder'
    },
    {
      alt: 'Initial Data'
    },
    {
      alt: 'Initial Custom'
    }
  ];

  return (
    <Stack direction="column" spacing={2}>
      <Avatar src={dummy} alt="Group User" max={3} spacing={25} />
      <Avatar src={dummy} alt="Group User" max={3} spacing="small" />
      <Avatar src={dummy} alt="Group User" max={3} spacing="medium" />
    </Stack>
  );
};

export default AvatarSpacing;
