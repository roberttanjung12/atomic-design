'use client';

import { PageID } from '@/@dront/components';
import QuickSearchMenuModule from '@/modules/components/QuickSearchMenu';

const QuickSearchMenuPage = () => {
  return (
    <PageID
      title="QuickSearchMenu"
      breadcrumbs={{
        title: 'QuickSearchMenu',
        routes: [
          { label: 'Components', href: '#' },
          { label: 'QuickSearchMenu', href: '#' }
        ]
      }}
    >
      <QuickSearchMenuModule />
    </PageID>
  );
};

export default QuickSearchMenuPage;
