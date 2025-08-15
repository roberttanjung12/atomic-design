'use client';

import { type ReactNode } from 'react';
import { DrontRootLayout } from '@/@dront/layouts';
import { AuthenticationProvider } from '@/context/AuthenticationProvider';
import resources from '@/languages/resources';
import { Providers } from '@/store/providers';
import { BuildTheme } from '@/theme';
import './global.css';

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const theme = BuildTheme();

  return (
    <DrontRootLayout i18nResources={resources} i18nLocale="id" theme={theme}>
      <Providers>
        <AuthenticationProvider>{children}</AuthenticationProvider>
      </Providers>
    </DrontRootLayout>
  );
}
