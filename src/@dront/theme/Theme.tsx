import * as locales from '@mui/material/locale';
import { createTheme } from '@mui/material/styles';
import _ from 'lodash';
import { useSelector } from '@/store/hooks';
import type { ApplicationState } from '@/store/store';
import components from './Components';
import { shadows, darkshadows } from './Shadows';
import { coreThemeDark, coreThemeLight } from './ThemeCore';
import { ThemeDark } from './ThemeDark';
import { ThemeLight } from './ThemeLight';
import typography from './Typography';

const BuildTheme = (config: any = {}) => {
  const lightThemeOptions = ThemeLight.find(theme => theme.name === config.theme);

  const darkthemeOptions = ThemeDark.find(theme => theme.name === config.theme);

  const appearance = useSelector((state: ApplicationState) => state.appearance);

  const defaultTheme = appearance.activeMode === 'dark' ? coreThemeDark : coreThemeLight;

  const defaultShadow = appearance.activeMode === 'dark' ? darkshadows : shadows;

  const themeSelect = appearance.activeMode === 'dark' ? darkthemeOptions : lightThemeOptions;

  const baseMode = {
    palette: {
      mode: appearance.activeMode
    },
    shape: {
      borderRadius: appearance.borderRadius
    },
    shadows: defaultShadow,
    typography: typography
  };

  const theme = createTheme(
    _.merge({}, baseMode, defaultTheme, locales, themeSelect, {
      direction: config.direction
    })
  );

  theme.components = components(theme);

  return theme;
};

const ThemeSettings = () => {
  const activeTheme = useSelector((state: ApplicationState) => state.appearance.activeTheme);

  const theme = BuildTheme({ theme: activeTheme });

  return theme;
};

export { ThemeSettings };
