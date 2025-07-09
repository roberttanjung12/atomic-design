'use client';

import type { ReactNode } from 'react';
import AuthenticationGuard from '@/@dront/authentication/AuthenticationGuard';
import MainLayout from '@/@dront/layouts/Main';
import MainLayoutProvider from '@/context/MainLayoutProvider';

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <AuthenticationGuard protectionLevel="authenticated">
      <MainLayoutProvider>
        <MainLayout>{children}</MainLayout>
      </MainLayoutProvider>
    </AuthenticationGuard>
  );
}
