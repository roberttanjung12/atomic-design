'use client';

import { PageID } from '@/@dront/components';
import FieldText from '@/modules/components/FieldText';

const FieldTextPage = () => {
  return (
    <PageID
      title="Field Text"
      breadcrumbs={{
        title: 'Field Text',
        routes: [
          { label: 'Components', href: '#' },
          { label: 'Field Text', href: '#' }
        ]
      }}
    >
      <FieldText />
    </PageID>
  );
};

export default FieldTextPage;
