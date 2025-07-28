'use client';

import type { ReactNode } from 'react';
import { DrontAuthGuard } from '@/@dront/authentication';
import { DrontLandingLayout } from '@/@dront/layouts';

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <DrontAuthGuard protectionLevel="public">
      <DrontLandingLayout>{children}</DrontLandingLayout>
    </DrontAuthGuard>
  );
}
