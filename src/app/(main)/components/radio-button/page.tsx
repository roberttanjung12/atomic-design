'use client';

import { PageID } from '@/@dront/components';
import RadioButtonModule from '@/modules/components/RadioButton';

const RadioButtonPage = () => {
  return (
    <PageID
      title="Radio Button"
      breadcrumbs={{
        title: 'Radio Button',
        routes: [
          { label: 'Components', href: '#' },
          { label: 'Radio Button', href: '#' }
        ]
      }}
    >
      <RadioButtonModule />
    </PageID>
  );
};

export default RadioButtonPage;
