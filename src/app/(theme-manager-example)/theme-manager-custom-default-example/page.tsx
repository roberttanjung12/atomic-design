'use client';

import ThemeManager from '@dront/ui/ThemeManager';

// Define a custom theme to be used as the default
const myCustomTheme = {
  logo: {
    dark: null,
    darkHorizontal: null,
    darkVertical: null,
    light: null,
    lightHorizontal: null,
    lightVertical: null
  },
  palette: {
    primary: {
      main: '#673AB7', // Deep Purple 500
      light: '#9575CD', // Deep Purple 300
      dark: '#512DA8', // Deep Purple 700
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#FFC107', // Amber 500
      light: '#FFD54F', // Amber 300
      dark: '#FFA000', // Amber 700
      contrastText: '#000000'
    },
    // Inherit the rest from the actual default theme for simplicity in this example
    error: { main: '#F44336', light: '#E57373', dark: '#D32F2F', contrastText: '#FFFFFF' },
    warning: { main: '#FF9800', light: '#FFB74D', dark: '#F57C00', contrastText: '#FFFFFF' },
    info: { main: '#2196F3', light: '#64B5F6', dark: '#1976D2', contrastText: '#FFFFFF' },
    success: { main: '#4CAF50', light: '#81C784', dark: '#388E3C', contrastText: '#FFFFFF' },
    grey: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#EEEEEE',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#9E9E9E',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      A100: '#F5F5F5',
      A200: '#EEEEEE',
      A400: '#BDBDBD',
      A700: '#616161'
    },
    text: { primary: '#212121', secondary: '#616161', disabled: '#9E9E9E', divider: '#EEEEEE' },
    background: { paper: '#FFFFFF', default: '#F4F7FE' }
  }
};

/**
 * An example demonstrating how to initialize the ThemeManager with a custom theme
 * by passing an object to the `defaultTheme` prop.
 */
const ThemeManagerCustomDefaultExample = () => {
  return (
    <ThemeManager defaultTheme={myCustomTheme} onPublish={values => console.log('Published Custom Theme:', values)} />
  );
};

export default ThemeManagerCustomDefaultExample;
