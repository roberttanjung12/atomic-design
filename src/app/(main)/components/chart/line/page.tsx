'use client';

import { PageID } from '@/@dront/components';
import LineChart from '@/modules/components/Chart/LineChart';

const ChartPage = () => {
  return (
    <PageID
      title="Line Chart"
      breadcrumbs={{
        title: 'Line Chart',
        routes: [
          { label: 'Components', href: '#' },
          { label: 'Line Chart', href: '#' }
        ]
      }}
    >
      <LineChart />
    </PageID>
  );
};

export default ChartPage;
