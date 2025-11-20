'use client';

import { PageID } from '@/@dront/components';
import DonutChart from '@/modules/components/Chart/DonutChart';

const ChartPage = () => {
  return (
    <PageID
      title="Donut Chart"
      breadcrumbs={{
        title: 'Donut Chart',
        routes: [
          { label: 'Components', href: '#' },
          { label: 'Donut Chart', href: '#' }
        ]
      }}
    >
      <DonutChart />
    </PageID>
  );
};

export default ChartPage;
