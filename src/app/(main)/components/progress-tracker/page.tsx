'use client';

import { PageID } from '@/@dront/components';
import ProgressTrackerModule from '@/modules/components/ProgressTracker';

const ProgressTrackerPage = () => {
  return (
    <PageID
      title="Progress Tracker"
      breadcrumbs={{
        title: 'Progress Tracker',
        routes: [
          { label: 'Components', href: '#' },
          { label: 'Progress Tracker', href: '#' }
        ]
      }}
    >
      <ProgressTrackerModule />
    </PageID>
  );
};

export default ProgressTrackerPage;
