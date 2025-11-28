'use client';

import { PageID } from '@/@dront/components';
import AccessControl from '@/modules/utility/AccessControl';

const AccessControlPage = () => {
  return (
    <PageID
      title="Access Control"
      breadcrumbs={{
        title: 'Access Control',
        routes: [
          { label: 'Utility', href: '#' },
          { label: 'Access Control', href: '#' }
        ]
      }}
    >
      <AccessControl />
    </PageID>
  );
};

export default AccessControlPage;
