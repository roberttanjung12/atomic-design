'use client';

import type { ReactNode } from 'react';
import { DrontAuthGuard } from '@/@dront/authentication';

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <DrontAuthGuard
      protectionLevel="unauthenticated"
      getToken={() => {
        return localStorage.getItem('dront') ?? '';
      }}
    >
      {children}
    </DrontAuthGuard>
  );
}
