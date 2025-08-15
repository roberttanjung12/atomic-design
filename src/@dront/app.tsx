'use client';

import type { ReactNode } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, type ThemeProviderProps } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { TopLoader } from './components';
import { useThemeStore } from './store';
import { ThemeSettings } from './theme';

/**
 * Represents the light and dark theme configurations for the Dront application.
 *
 * This is used to supply both theme variants to the {@link DrontApplication} component,
 * allowing it to dynamically switch based on the current active mode from the theme store.
 */
export interface DrontApplicationTheme {
  /**
   * The Material-UI theme to be used when the application is in light mode.
   */
  light: ThemeProviderProps['theme'];

  /**
   * The Material-UI theme to be used when the application is in dark mode.
   */
  dark: ThemeProviderProps['theme'];
}

const DrontApplication = ({ children, theme: themes }: { children: ReactNode; theme?: DrontApplicationTheme }) => {
  const [activeMode] = useThemeStore('activeMode');
  const theme = themes?.[activeMode] ?? themes?.light;

  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <ThemeProvider theme={theme ?? ThemeSettings()}>
        <CssBaseline />
        <TopLoader />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
};

export default DrontApplication;
