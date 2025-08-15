const ThemeLight = [
  {
    name: 'DRONT_THEME',
    palette: {
      primary: {
        main: '#5D87FF',
        light: '#ECF2FF',
        dark: '#4570EA',
        contrastText: '#ffffff'
      },
      secondary: {
        main: '#49BEFF',
        light: '#E8F7FF',
        dark: '#23afdb',
        contrastText: '#ffffff'
      }
    }
  }
] as const;

export type ThemeLightName = (typeof ThemeLight)[number]['name'];

export { ThemeLight };
