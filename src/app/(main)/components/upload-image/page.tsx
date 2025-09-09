'use client';

import { PageID } from '@/@dront/components';
import UploadImageModule from '@/modules/components/UploadImage';

const UploadImagePage = () => {
  return (
    <PageID
      title="Upload Image"
      breadcrumbs={{
        title: 'Upload Image',
        routes: [
          { label: 'Components', href: '#' },
          { label: 'Upload Image', href: '#' }
        ]
      }}
    >
      <UploadImageModule />
    </PageID>
  );
};

export default UploadImagePage;
