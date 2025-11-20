'use client';

import { PageID } from '@/@dront/components';
import SunburstChart from '@/modules/components/Chart/SunburstChart';

const ChartPage = () => {
  return (
    <PageID
      title="Sunburst Chart"
      breadcrumbs={{
        title: 'Sunburst Chart',
        routes: [
          { label: 'Components', href: '#' },
          { label: 'Sunburst Chart', href: '#' }
        ]
      }}
    >
      <SunburstChart />
    </PageID>
  );
};

export default ChartPage;
