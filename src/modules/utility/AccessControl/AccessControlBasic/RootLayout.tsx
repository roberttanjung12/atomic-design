import AccessControlProvider from '@dront/ui/AccessControl';
import HomePage from './HomePage';

// app/layout.tsx
// or
// pages/_app.tsx
const RootLayout = () => (
  <AccessControlProvider
    from={{
      static: [
        {
          id: 'home',
          title: 'Home',
          icon: 'home',
          href: '/',
          permission: ['View', 'Download']
        }
      ]
    }}
    shape={{ path: 'href', permission: 'permission' }}
  >
    <HomePage />
  </AccessControlProvider>
);

export default RootLayout;
