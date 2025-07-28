'use client';

import type { ReactNode } from 'react';
import type { Resource } from 'i18next';
import NextTopLoader from 'nextjs-toploader';
import DrontApplication from '@/@dront/app';
import { AppearanceProvider } from '@/@dront/context/AppearanceProvider';
import i18n from '@/@dront/utils/i18n';

interface DrontRootLayoutProps {
  children: ReactNode;
  i18nResources: Resource;
  i18nLocale: string;
}

const DrontRootLayout = ({ children, i18nResources, i18nLocale = 'id' }: DrontRootLayoutProps) => {
  if (i18nResources) {
    i18n.setInit(i18nResources, i18nLocale);
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <NextTopLoader color="#5D87FF" />

        <AppearanceProvider>
          <DrontApplication>{children}</DrontApplication>
        </AppearanceProvider>
      </body>
    </html>
  );
};

export default DrontRootLayout;
