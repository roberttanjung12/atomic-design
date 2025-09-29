'use client';

import { PageID } from '@/@dront/components';
import UploadFileModule from '@/modules/components/UploadFile';

const UploadFilePage = () => {
  return (
    <PageID
      title="Upload File"
      breadcrumbs={{
        title: 'Upload File',
        routes: [
          { label: 'Components', href: '#' },
          { label: 'Upload File', href: '#' }
        ]
      }}
    >
      <UploadFileModule />
    </PageID>
  );
};

export default UploadFilePage;
