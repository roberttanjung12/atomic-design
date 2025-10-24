'use client';

import { PageID } from '@/@dront/components';
import CountdownModule from '@/modules/components/Countdown';

const CountdownPage = () => {
  return (
    <PageID
      title="Countdown"
      breadcrumbs={{
        title: 'Countdown',
        routes: [
          { label: 'Components', href: '#' },
          { label: 'Countdown', href: '#' }
        ]
      }}
    >
      <CountdownModule />
    </PageID>
  );
};

export default CountdownPage;
