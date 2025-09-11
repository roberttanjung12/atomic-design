'use client';

import { PageID } from '@/@dront/components';
import ToggleModule from '@/modules/components/Toggle';

const TogglePage = () => {
  return (
    <PageID
      title="Toggle"
      breadcrumbs={{
        title: 'Toggle',
        routes: [
          { label: 'Components', href: '#' },
          { label: 'Toggle', href: '#' }
        ]
      }}
    >
      <ToggleModule />
    </PageID>
  );
};

export default TogglePage;
