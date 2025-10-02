'use client';

import { PageID } from '@/@dront/components';
import BreadcrumbsModule from '@/modules/components/Breadcrumbs';

const BreadcrumbsPage = () => {
  return (
    <PageID
      title="Breadcrumbs"
      breadcrumbs={{
        title: 'Breadcrumbs',
        routes: [
          { label: 'Components', href: '#' },
          { label: 'Breadcrumbs', href: '#' }
        ]
      }}
    >
      <BreadcrumbsModule />
    </PageID>
  );
};

export default BreadcrumbsPage;
