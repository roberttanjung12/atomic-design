'use client';

import { PageID } from '@/@dront/components';
import CheckboxModule from '@/modules/components/Checkbox';

const CheckboxPage = () => {
  return (
    <PageID
      title="Checkbox"
      breadcrumbs={{
        title: 'Checkbox',
        routes: [
          { label: 'Components', href: '#' },
          { label: 'Checkbox', href: '#' }
        ]
      }}
    >
      <CheckboxModule />
    </PageID>
  );
};

export default CheckboxPage;
