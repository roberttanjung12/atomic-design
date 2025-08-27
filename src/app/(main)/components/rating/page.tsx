'use client';

import { PageID } from '@/@dront/components';
import RatingComp from '@/modules/components/Rating';

const RatingPage = () => {
  return (
    <PageID
      title="Rating"
      breadcrumbs={{
        title: 'Rating',
        routes: [
          { label: 'Components', href: '#' },
          { label: 'Rating', href: '#' }
        ]
      }}
    >
      <RatingComp />
    </PageID>
  );
};

export default RatingPage;
