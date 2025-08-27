'use client';

import React from 'react';
import { PageID } from '@/@dront/components';
import ProgressCircularModule from '../../../../modules/components/ProgressCircular';

const ProgressCircularPage = () => {
  return (
    <PageID breadcrumbs={{ title: 'Progress Circular' }}>
      <ProgressCircularModule />
    </PageID>
  );
};

export default ProgressCircularPage;
