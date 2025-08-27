'use client';

import { PageID } from '@/@dront/components';
import ProgressBarModule from '../../../../modules/components/ProgressBar';

const ProgressBarPage = () => {
  return (
    <PageID
      title="Progress Bar"
      breadcrumbs={{
        title: 'Progress Bar',
        routes: [
          { label: 'Components', href: '#' },
          { label: 'Progress Bar', href: '#' }
        ]
      }}
    >
      <ProgressBarModule />
    </PageID>
  );
};

export default ProgressBarPage;
