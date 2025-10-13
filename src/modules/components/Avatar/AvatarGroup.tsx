'use client';

import { FolderCopyOutlined } from '@mui/icons-material';
import Avatar from '@/@dront/components/Avatar';
import type { AvatarItem } from '@/@dront/components/Avatar/Avatar.types';

const AvatarGroup = () => {
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
    }
  ];

  return <Avatar src={dummy} alt="Group User" />;
};

export default AvatarGroup;
