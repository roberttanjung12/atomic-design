'use client';

import { PageID } from '@/@dront/components';
import FloatingAlertModule from '@/modules/components/AlertFloating';

const FieldPasswordPage = () => {
  return (
    <PageID
      title="Alert (Floating)"
      breadcrumbs={{
        title: 'Alert (Floating)',
        routes: [
          { label: 'Components', href: '#' },
          { label: 'Alert', href: '#' }
        ]
      }}
    >
      <FloatingAlertModule />
    </PageID>
  );
};

export default FieldPasswordPage;
