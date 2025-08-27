'use client';

import { PageID } from '@/@dront/components';
import ButtonModule from '@/modules/components/Button';

const ButtonPage = () => {
  return (
    <PageID
      title="Button"
      breadcrumbs={{
        title: 'Button',
        routes: [
          { label: 'Components', href: '#' },
          { label: 'Button', href: '#' }
        ]
      }}
    >
      <ButtonModule />
    </PageID>
  );
};

export default ButtonPage;
