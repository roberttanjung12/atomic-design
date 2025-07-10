'use client';

import { PageID } from '@/@dront/components';
import FieldTextValidation from '@/modules/components/FieldTextValidation';

const FieldTextValidationPage = () => {
  return (
    <PageID
      title="Field Text Validation"
      breadcrumbs={{
        title: 'Field Text Validation',
        routes: [
          { label: 'Components', href: '#' },
          { label: 'Field Text Validation', href: '#' }
        ]
      }}
    >
      <FieldTextValidation />
    </PageID>
  );
};

export default FieldTextValidationPage;
