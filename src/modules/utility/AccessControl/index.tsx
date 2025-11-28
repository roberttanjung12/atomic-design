import { DocView } from '@/@dront/components';
import homePageRaw from './AccessControlBasic/HomePage?raw';
import homeViewRaw from './AccessControlBasic/HomeView?raw';
import RootLayout from './AccessControlBasic/RootLayout';
import rootLayoutRaw from './AccessControlBasic/RootLayout?raw';

const AccessControlModule = () => {
  return (
    <DocView
      contributors={['Robert Tanjung', 'Erghi Imannur Ichsan']}
      overview={
        'The `AccessControl` component provides a flexible way to manage and enforce permissions for UI elements and routes. It allows you to define permission rules, check access, and conditionally render components based on user roles or permissions. This helps ensure that only authorized users can view or interact with specific parts of your application.'
      }
      sections={[
        {
          title: 'Basic',
          descriptions:
            'This example demonstrates a basic usage of the AccessControl system. It shows how to set up permission rules, wrap your layout with the provider, and use permission checks to conditionally render buttons and views. The example includes a home page with "Download" and "Edit" actions, where access is controlled by the defined permissions.',
          example: <RootLayout />,
          exampleCode: [
            {
              code: rootLayoutRaw,
              label: './RootLayout.tsx'
            },
            {
              code: homePageRaw,
              label: './HomePage.tsx'
            },
            {
              code: homeViewRaw,
              label: './HomeView.tsx'
            }
          ]
        }
      ]}
      dependencies={{
        '@casl/ability': {
          version: '^5.0.0',
          description: 'CASL Ability is used to define and check user permissions and access rules.'
        },
        '@casl/react': {
          version: '^6.0.0',
          description:
            'CASL React provides React bindings for CASL Ability, enabling permission checks in React components.'
        },
        swr: {
          version: '^2.0.0',
          description:
            'SWR is used for data fetching and caching, supporting immutable and remote data for access control.'
        }
      }}
    />
  );
};

export default AccessControlModule;
