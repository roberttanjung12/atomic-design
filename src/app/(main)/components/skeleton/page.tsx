'use client';

import { PageID } from '@/@dront/components';
import SkeletonModule from '@/modules/components/Skeleton';

const SkeletonPage = () => {
  return (
    <PageID
      title="Skeleton"
      breadcrumbs={{
        title: 'Skeleton',
        routes: [
          { label: 'Components', href: '#' },
          { label: 'Skeleton', href: '' }
        ]
      }}
    >
      <SkeletonModule />
    </PageID>
  );
};

export default SkeletonPage;
