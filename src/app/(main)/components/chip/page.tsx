'use client';

import { PageID } from '@/@dront/components';
import ChipModule from '@/modules/components/Chip';

const ChipPage = () => {
  return (
    <PageID
      title="Chip"
      breadcrumbs={{
        title: 'Chip',
        routes: [
          { label: 'Components', href: '#' },
          { label: 'Chips', href: '#' }
        ]
      }}
    >
      <ChipModule />
    </PageID>
  );
};

export default ChipPage;
