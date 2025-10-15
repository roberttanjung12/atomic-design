'use client';

import { PageID } from '@/@dront/components';
import TimelineModule from '@/modules/components/Timeline';

const TimelinePage = () => {
  return (
    <PageID
      title="Timeline"
      breadcrumbs={{
        title: 'Timeline',
        routes: [
          { label: 'Components', href: '#' },
          { label: 'Timeline', href: '' }
        ]
      }}
    >
      <TimelineModule />
    </PageID>
  );
};

export default TimelinePage;
