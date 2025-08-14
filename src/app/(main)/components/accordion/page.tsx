'use client';

import { PageID } from '@/@dront/components';
import Accordion from '@/modules/components/Accordion';

const AccordionPage = () => {
  return (
    <PageID
      title="Accordion"
      breadcrumbs={{
        title: 'Accordion',
        routes: [
          { label: 'Components', href: '#' },
          { label: 'Accordion', href: '#' }
        ]
      }}
    >
      <Accordion />
    </PageID>
  );
};

export default AccordionPage;
