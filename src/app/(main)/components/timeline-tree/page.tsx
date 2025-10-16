'use client';

import { PageID } from '@/@dront/components';
import TimelineModule from '@/modules/components/TimelineTree';

const TimelinePage = () => {
  return (
    <PageID
      title="Timeline Tree"
      breadcrumbs={{
        title: 'Timeline Tree',
        routes: [
          { label: 'Components', href: '#' },
          { label: 'Timeline Tree', href: '' }
        ]
      }}
    >
      <TimelineModule />
    </PageID>
  );
};

export default TimelinePage;
