'use client';

import type { ReactNode } from 'react';
import type { Resource } from 'i18next';
import dynamic from 'next/dynamic';
import type { DrontApplicationTheme } from '@/@dront/app';
import { AppearanceProvider } from '@/@dront/context/AppearanceProvider';
import i18n from '@/@dront/utils/i18n';

const DrontApplication = dynamic(() => import('@/@dront/app'), {
  ssr: false
});

/**
 * Props for the {@link DrontRootLayout} component.
 *
 * This interface defines the configuration and content for initializing
 * the Dront application root layout.
 */
interface DrontRootLayoutProps {
  /**
   * The React nodes to be rendered inside the layout.
   * Typically, this will be your page content.
   */
  children: ReactNode;

  /**
   * The translation resources for i18next.
   * Used to initialize the application's localization system.
   */
  i18nResources: Resource;

  /**
   * The initial locale/language code for translations.
   *
   * @default 'id'
   */
  i18nLocale: string;

  /**
   * Optional application theme settings.
   * When provided, overrides the default theme in {@link DrontApplication}.
   */
  theme?: DrontApplicationTheme;
}

const DrontRootLayout = ({ children, i18nResources, i18nLocale = 'id', theme }: DrontRootLayoutProps) => {
  if (i18nResources) {
    i18n.setInit(i18nResources, i18nLocale);
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AppearanceProvider>
          <DrontApplication theme={theme}>{children}</DrontApplication>
        </AppearanceProvider>
      </body>
    </html>
  );
};

export default DrontRootLayout;
