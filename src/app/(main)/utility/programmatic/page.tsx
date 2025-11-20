'use client';

import { PageID } from '@/@dront/components';
import ProgrammaticModule from '@/modules/utility/Programmatic';

const AccordionPage = () => {
  return (
    <PageID
      title="Programmatic"
      breadcrumbs={{
        title: 'Programmatic',
        routes: [
          { label: 'Utility', href: '#' },
          { label: 'Programmatic', href: '#' }
        ]
      }}
    >
      <ProgrammaticModule />
    </PageID>
  );
};

export default AccordionPage;
