'use client';

import { PageID } from '@/@dront/components';
import HeatmapChart from '@/modules/components/Chart/HeatmapChart';

const ChartPage = () => {
  return (
    <PageID
      title="Heatmap Chart"
      breadcrumbs={{
        title: 'Heatmap Chart',
        routes: [
          { label: 'Components', href: '#' },
          { label: 'Heatmap Chart', href: '#' }
        ]
      }}
    >
      <HeatmapChart />
    </PageID>
  );
};

export default ChartPage;
