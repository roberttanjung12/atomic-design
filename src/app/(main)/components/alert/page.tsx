'use client';

import { PageID } from '@/@dront/components';
import Alert from '@/modules/components/Alert';

const FieldPasswordPage = () => {
  return (
    <PageID
      title="Alert"
      breadcrumbs={{
        title: 'Alert',
        routes: [
          { label: 'Components', href: '#' },
          { label: 'Alert', href: '#' }
        ]
      }}
    >
      <Alert />
    </PageID>
  );
};

export default FieldPasswordPage;
