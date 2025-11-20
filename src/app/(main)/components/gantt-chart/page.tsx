'use client';

import { PageID } from '@/@dront/components';
import GanttChartModule from '@/modules/components/GanttChart';

const GanttChartPage = () => {
  return (
    <PageID
      title="Gantt Chart"
      breadcrumbs={{
        title: 'Gantt Chart',
        routes: [
          { label: 'Components', href: '#' },
          { label: 'Gantt Chart', href: '#' }
        ]
      }}
    >
      <GanttChartModule />
    </PageID>
  );
};

export default GanttChartPage;
