'use client';

import { PageID } from '@/@dront/components';
import TimeMachineModule from '@/modules/components/TimeMachine';

const TimeMachinePage = () => {
  return (
    <PageID
      title="Time Machine"
      breadcrumbs={{
        title: 'Time Machine',
        routes: [
          { label: 'Components', href: '#' },
          { label: 'Time Machine', href: '#' }
        ]
      }}
    >
      <TimeMachineModule />
    </PageID>
  );
};

export default TimeMachinePage;
