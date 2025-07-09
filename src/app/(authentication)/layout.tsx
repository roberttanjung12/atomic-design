'use client';

import type { ReactNode } from 'react';
import AuthenticationGuard from '@/@dront/authentication/AuthenticationGuard';

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <AuthenticationGuard protectionLevel="unauthenticated">{children}</AuthenticationGuard>;
}
