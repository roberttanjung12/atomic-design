'use client';

import type { ReactNode } from 'react';
import MainLayoutProvider from '@/@dront/context/MainLayoutProvider';
import MainLayout from '../Main';
import type { NavigationItem } from '../Main/Sidebar/Navigation/navigation-types';

interface DrontMainLayoutProps {
  children: ReactNode;
  navigations: NavigationItem[];
}

const DrontMainLayout = ({ children, navigations }: DrontMainLayoutProps) => {
  return (
    <MainLayoutProvider navigations={navigations}>
      <MainLayout>{children}</MainLayout>
    </MainLayoutProvider>
  );
};

export default DrontMainLayout;
