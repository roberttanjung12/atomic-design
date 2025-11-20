'use client';

import { PageID } from '@/@dront/components';
import SankeyChart from '@/modules/components/Chart/SankeyChart';

const ChartPage = () => {
  return (
    <PageID
      title="Sankey Chart"
      breadcrumbs={{
        title: 'Sankey Chart',
        routes: [
          { label: 'Components', href: '#' },
          { label: 'Sankey Chart', href: '#' }
        ]
      }}
    >
      <SankeyChart />
    </PageID>
  );
};

export default ChartPage;
