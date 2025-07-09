'use client';

import type { ReactNode } from 'react';
import AuthenticationGuard from '@/@dront/authentication/AuthenticationGuard';
import LandingLayout from '@/@dront/layouts/Landing';

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <AuthenticationGuard protectionLevel="public">
      <LandingLayout>{children}</LandingLayout>
    </AuthenticationGuard>
  );
}
