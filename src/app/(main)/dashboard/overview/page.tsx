'use client';

import { Box } from '@mui/material';
import PageID from '@/@dront/components/PageID';

const OverviewPage = () => {
  return (
    <PageID
      title="Dashboard - Overview"
      breadcrumbs={{
        title: 'Overview',
        routes: [
          { label: 'Dashboard', href: '#' },
          { label: 'Overview', href: '#' }
        ]
      }}
    >
      <Box mt={3}>Overview</Box>
    </PageID>
  );
};

export default OverviewPage;
