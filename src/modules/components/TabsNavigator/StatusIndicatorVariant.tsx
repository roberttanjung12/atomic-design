'use client';

import { Stack } from '@mui/material';
import TabsNavigator from '@/@dront/components/TabsNavigator';

const TabsNavigatorVariant = () => {
  return (
    <Stack spacing={4}>
      <TabsNavigator
        defaultValue="overview"
        variant="underline"
        tabs={[
          {
            label: 'Overview',
            value: 'overview',
            content: <div>Overview Tab</div>
          },
          {
            label: 'Details',
            value: 'details',
            content: <div>Details Tab</div>
          },
          {
            label: 'Settings',
            value: 'settings',
            content: <div>Settings Tab</div>
          }
        ]}
      />

      <TabsNavigator
        defaultValue="overview"
        variant="outlined"
        tabs={[
          {
            label: 'Overview',
            value: 'overview',
            content: <div>Overview Tab</div>
          },
          {
            label: 'Details',
            value: 'details',
            content: <div>Details Tab</div>
          },
          {
            label: 'Settings',
            value: 'settings',
            content: <div>Settings Tab</div>
          }
        ]}
      />
    </Stack>
  );
};

export default TabsNavigatorVariant;
