'use client';

import { PageID } from '@/@dront/components';
import BarChart from '@/modules/components/Chart/BarChart';

const ChartPage = () => {
  return (
    <PageID
      title="Bar Chart"
      breadcrumbs={{
        title: 'Bar Chart',
        routes: [
          { label: 'Components', href: '#' },
          { label: 'Bar Chart', href: '#' }
        ]
      }}
    >
      <BarChart />
    </PageID>
  );
};

export default ChartPage;
