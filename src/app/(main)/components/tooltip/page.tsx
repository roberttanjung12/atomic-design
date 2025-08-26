'use client';

import { PageID } from '@/@dront/components';
import TooltipComp from '@/modules/components/Tooltip';

const TooltipPage = () => {
  return (
    <PageID
      title="Tooltip"
      breadcrumbs={{
        title: 'Tooltip',
        routes: [
          { label: 'Components', href: '#' },
          { label: 'Tooltip', href: '#' }
        ]
      }}
    >
      <TooltipComp />
    </PageID>
  );
};

export default TooltipPage;
