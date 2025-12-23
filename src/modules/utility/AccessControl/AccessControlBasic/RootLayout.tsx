import { AccessControl } from '@dront/ui/AccessControl';
import HomePage from './HomePage';

// app/layout.tsx
// or
// pages/_app.tsx
const RootLayout = () => (
  <AccessControl
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
  </AccessControl>
);

export default RootLayout;
