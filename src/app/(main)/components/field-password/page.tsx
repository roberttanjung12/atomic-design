'use client';

import { PageID } from '@/@dront/components';
import FieldPassword from '@/modules/components/FieldPassword';

const FieldPasswordPage = () => {
  return (
    <PageID
      title="Field Password"
      breadcrumbs={{
        title: 'Field Password',
        routes: [
          { label: 'Components', href: '#' },
          { label: 'Field Password', href: '#' }
        ]
      }}
    >
      <FieldPassword />
    </PageID>
  );
};

export default FieldPasswordPage;
