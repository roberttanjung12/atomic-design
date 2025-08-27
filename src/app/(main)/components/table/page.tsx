'use client';

import { PageID } from '@/@dront/components';
import TableModule from '@/modules/components/Table';

const TablePage = () => {
  return (
    <PageID
      title="Table"
      breadcrumbs={{
        title: 'Table',
        routes: [
          { label: 'Components', href: '#' },
          { label: 'Table', href: '#' }
        ]
      }}
    >
      <TableModule />
    </PageID>
  );
};

export default TablePage;
