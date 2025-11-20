'use client';

import { PageID } from '@/@dront/components';
import RadarChart from '@/modules/components/Chart/RadarChart';

const ChartPage = () => {
  return (
    <PageID
      title="Radar Chart"
      breadcrumbs={{
        title: 'Radar Chart',
        routes: [
          { label: 'Components', href: '#' },
          { label: 'Radar Chart', href: '#' }
        ]
      }}
    >
      <RadarChart />
    </PageID>
  );
};

export default ChartPage;
