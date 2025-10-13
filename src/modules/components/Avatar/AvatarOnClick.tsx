'use client';

import { FolderCopyOutlined } from '@mui/icons-material';
import { Stack } from '@mui/material';
import Avatar from '@/@dront/components/Avatar';
import type { AvatarItem } from '@/@dront/components/Avatar/Avatar.types';

type CustomData = {
  id: number;
  role: string;
  isActive: boolean;
  img?: string;
};

const AvatarOnClick = () => {
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

  const dummyCustomData: AvatarItem<CustomData>[] = [
    {
      alt: 'First Data',
      id: 1,
      role: 'admin',
      isActive: true
    },
    {
      alt: 'Second Data',
      id: 2,
      role: 'user',
      isActive: true,
      img: 'https://randomuser.me/api/portraits/men/72.jpg'
    },
    {
      alt: 'Third Data',
      id: 3,
      role: 'admin',
      isActive: false
    }
  ];

  const defaultOnClick = () => {
    alert('Default on Click');
  };

  const getIndexOnClick = (_: any, index?: number) => {
    alert(`Click avatar with index: ${index}`);
  };

  const getDataOnClick = (data?: AvatarItem, index?: number) => {
    alert(`Click avatar with data: ${data?.alt} and index: ${index}`);
  };

  const getCustomDataOnClick = (data?: AvatarItem<CustomData>) => {
    alert(`Click avatar with id: ${data?.id} and role: ${data?.role}`);
  };

  return (
    <Stack display="flex" alignItems="end" direction="column" spacing={2}>
      <Avatar src={dummy} alt="Group User" onClick={defaultOnClick} />
      <Avatar src={dummy} alt="Group User" onClick={getIndexOnClick} />
      <Avatar src={dummy} alt="Group User" onClick={getDataOnClick} />
      <Avatar src={dummyCustomData} alt="Group User" onClick={getCustomDataOnClick} />
      <Avatar<CustomData>
        src={{ alt: 'Ivan Narendra', id: 1, role: 'admin', isActive: false }}
        alt="Avatar Single with Object Type Flexible"
        onClick={getCustomDataOnClick}
      />
    </Stack>
  );
};

export default AvatarOnClick;
