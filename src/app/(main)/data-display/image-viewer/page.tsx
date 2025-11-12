'use client';

import { PageID } from '@/@dront/components';
import ImageViewerModule from '@/modules/data-display/ImageViewer';

const ImageViewerPage = () => {
  return (
    <PageID
      title="Image Viewer"
      breadcrumbs={{
        title: 'Image Viewer',
        routes: [
          { label: 'Utility', href: '#' },
          { label: 'Image Viewer', href: '#' }
        ]
      }}
    >
      <ImageViewerModule />
    </PageID>
  );
};

export default ImageViewerPage;
