'use client';

import type { ReactNode } from 'react';
import NextTopLoader from 'nextjs-toploader';
import { AuthenticationProvider } from '@/context/AuthenticationProvider';
import { Providers } from '@/store/providers';
import DRONTApplication from './app';
import './global.css';

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <NextTopLoader color="#5D87FF" />
        <Providers>
          <AuthenticationProvider>
            <DRONTApplication>{children}</DRONTApplication>
          </AuthenticationProvider>
        </Providers>
      </body>
    </html>
  );
}
