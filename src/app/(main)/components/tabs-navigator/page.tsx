'use client';

import { PageID } from '@/@dront/components';
import TabsNavigatorModule from '@/modules/components/TabsNavigator';

const StatusPage = () => {
  return (
    <PageID
      title="Tabs Navigator"
      breadcrumbs={{
        title: 'Tabs Navigator',
        routes: [
          { label: 'Components', href: '#' },
          { label: 'Tabs Navigator', href: '#' }
        ]
      }}
    >
      <TabsNavigatorModule />
    </PageID>
  );
};

export default StatusPage;
