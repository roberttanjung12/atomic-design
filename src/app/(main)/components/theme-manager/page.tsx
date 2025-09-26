'use client';

import { PageID } from '@/@dront/components';
import ThemeManagerModule from '@/modules/components/ThemeManager';

const ThemeManager = () => {
  return (
    <PageID
      title="Theme Manager"
      breadcrumbs={{
        title: 'Theme Manager',
        routes: [
          { label: 'Components', href: '#' },
          { label: 'Theme Manager', href: '#' }
        ]
      }}
    >
      <ThemeManagerModule />
    </PageID>
  );
};

export default ThemeManager;
