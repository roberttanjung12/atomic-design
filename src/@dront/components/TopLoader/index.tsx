'use client';

import { useTheme } from '@mui/material';
import NextTopLoader from 'nextjs-toploader';

/**
 * A client-side top-loading progress bar component for Next.js applications.
 *
 * This component uses the application's Material-UI theme to automatically
 * match the loader's color with the current primary palette color.
 *
 * It leverages:
 * - `NextTopLoader` for displaying a loading bar at the top of the page.
 * - `useTheme` from MUI to retrieve the theme's primary color.
 *
 * @example
 * // Place this in your `_app.tsx` or layout component to enable the top loader:
 * <TopLoader />
 */
const TopLoader = () => {
  const theme = useTheme();

  return <NextTopLoader color={theme.palette.primary.main} />;
};

export default TopLoader;
