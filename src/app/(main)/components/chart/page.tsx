'use client';

import { PageID } from '@/@dront/components';
import ChartModule from '@/modules/components/Chart';

const ChartPage = () => {
  return (
    <PageID
      title="Chart"
      breadcrumbs={{
        title: 'Chart',
        routes: [
          { label: 'Components', href: '#' },
          { label: 'Charts', href: '#' }
        ]
      }}
    >
      <ChartModule />
    </PageID>
  );
};

export default ChartPage;
