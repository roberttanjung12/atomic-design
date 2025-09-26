'use client';

import { Box } from '@mui/material';
import { PageID } from '@/@dront/components';
import ComponentsOverview from '@/modules/Dashboard/ComponentsOverview';

const OverviewPage = () => {
  return (
    <PageID
      title="Dashboard - Overview"
      breadcrumbs={{
        title: 'Components Overview',
        routes: [
          { label: 'Dashboard', href: '/dashboard' },
          { label: 'Overview', href: '/dashboard/overview' }
        ]
      }}
    >
      <Box mt={3}>
        <ComponentsOverview />
      </Box>
    </PageID>
  );
};

export default OverviewPage;
