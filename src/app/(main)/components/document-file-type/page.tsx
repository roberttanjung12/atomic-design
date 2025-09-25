'use client';

import { PageID } from '@/@dront/components';
import DocumentFileTypeComp from '@/modules/components/DocumentFileType';

const DocumentFileTypePage = () => {
  return (
    <PageID
      title="Document File Type"
      breadcrumbs={{
        title: 'Document File Type',
        routes: [
          { label: 'Components', href: '#' },
          { label: 'Document File Type', href: '#' }
        ]
      }}
    >
      <DocumentFileTypeComp />
    </PageID>
  );
};

export default DocumentFileTypePage;
