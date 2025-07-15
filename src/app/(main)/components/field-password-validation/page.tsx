'use client';

import { PageID } from '@/@dront/components';
import FieldPasswordValidation from '@/modules/components/FieldPasswordValidation';

const FieldPasswordValidationPage = () => {
  return (
    <PageID
      title="Field Password Validation"
      breadcrumbs={{
        title: 'Field Password Validation',
        routes: [
          { label: 'Components', href: '#' },
          { label: 'Field Password Validation', href: '#' }
        ]
      }}
    >
      <FieldPasswordValidation />
    </PageID>
  );
};

export default FieldPasswordValidationPage;
