'use client';

import { PageID } from '@/@dront/components';
import StatusIndicator from '@/modules/components/StatusIndicator';

const StatusPage = () => {
  return (
    <PageID
      title="Status Indicator"
      breadcrumbs={{
        title: 'Status Indicator',
        routes: [
          { label: 'Components', href: '#' },
          { label: 'Status Indicator', href: '#' }
        ]
      }}
    >
      <StatusIndicator />
    </PageID>
  );
};

export default StatusPage;
