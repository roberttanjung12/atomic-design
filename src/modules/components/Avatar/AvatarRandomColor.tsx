'use client';

import { FolderCopyOutlined } from '@mui/icons-material';
import Avatar from '@/@dront/components/Avatar';
import type { AvatarItem } from '@/@dront/components/Avatar/Avatar.types';

const AvatarRandomColor = () => {
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

  return <Avatar src={dummy} alt="Group User" randomColor />;
};

export default AvatarRandomColor;
