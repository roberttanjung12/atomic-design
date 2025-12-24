'use client';

import { PageID } from '@/@dront/components';
import UseBroadcastChannelModule from '@/modules/hooks/useBroadcastChannel';

const UseBroadcastChannelPage = () => {
  return (
    <PageID
      title="useBroadcastChannel"
      breadcrumbs={{
        title: 'useBroadcastChannel',
        routes: [
          { label: 'Hooks', href: '#' },
          { label: 'useBroadcastChannel', href: '#' }
        ]
      }}
    >
      <UseBroadcastChannelModule />
    </PageID>
  );
};

export default UseBroadcastChannelPage;
