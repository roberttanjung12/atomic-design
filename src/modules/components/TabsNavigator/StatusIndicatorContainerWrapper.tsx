'use client';

import Card from '@mui/material/Card';
import TabsNavigator from '@/@dront/components/TabsNavigator';

const TabsNavigatorBasic = () => {
  return (
    <TabsNavigator
      defaultValue="overview"
      contentWrapper={({ children }) => {
        return <Card sx={{ py: 4 }}>{children}</Card>;
      }}
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
  );
};

export default TabsNavigatorBasic;
