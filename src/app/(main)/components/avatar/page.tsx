'use client';

import { PageID } from '@/@dront/components';
import AvatarModule from '@/modules/components/Avatar';

const AvatarPage = () => {
  return (
    <PageID
      title="Avatar"
      breadcrumbs={{
        title: 'Avatar',
        routes: [
          { label: 'Components', href: '#' },
          { label: 'Avatar', href: '' }
        ]
      }}
    >
      <AvatarModule />
    </PageID>
  );
};

export default AvatarPage;
