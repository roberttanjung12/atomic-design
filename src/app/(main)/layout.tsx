'use client';

import { type ReactNode } from 'react';
import { DrontAuthGuard } from '@/@dront/authentication';
import { DrontMainLayout } from '@/@dront/layouts';
import Menuitems from '@/configurations/sidebar-navigation';

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <DrontAuthGuard
      protectionLevel="authenticated"
      getToken={() => {
        return localStorage.getItem('dront') ?? '';
      }}
    >
      <DrontMainLayout navigations={Menuitems}>{children}</DrontMainLayout>
    </DrontAuthGuard>
  );
}
