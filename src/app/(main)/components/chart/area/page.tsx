'use client';

import { PageID } from '@/@dront/components';
import AreaChart from '@/modules/components/Chart/AreaChart';

const ChartPage = () => {
  return (
    <PageID
      title="Area Chart"
      breadcrumbs={{
        title: 'Area Chart',
        routes: [
          { label: 'Components', href: '#' },
          { label: 'Area Charts', href: '#' }
        ]
      }}
    >
      <AreaChart />
    </PageID>
  );
};

export default ChartPage;
