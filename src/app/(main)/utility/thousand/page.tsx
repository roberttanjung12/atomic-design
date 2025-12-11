'use client';

import { PageID } from '@/@dront/components';
import ThousandUtilityModule from '@/modules/utility/Thousand';

const ThousandUtilityPage = () => {
  return (
    <PageID
      title="Thousand"
      breadcrumbs={{
        title: 'Thousand',
        routes: [
          { label: 'Utility', href: '#' },
          { label: 'Thousand', href: '#' }
        ]
      }}
    >
      <ThousandUtilityModule />
    </PageID>
  );
};

export default ThousandUtilityPage;
