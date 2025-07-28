import * as locales from '@mui/material/locale';
import { createTheme } from '@mui/material/styles';
import _ from 'lodash';
import { useAppearance } from '../context/AppearanceProvider';
import components from './Components';
import { shadows, darkshadows } from './Shadows';
import { coreThemeDark, coreThemeLight } from './ThemeCore';
import { ThemeDark } from './ThemeDark';
import { ThemeLight } from './ThemeLight';
import typography from './Typography';

const BuildTheme = (config: any = {}) => {
  const lightThemeOptions = ThemeLight.find(theme => theme.name === config.theme);

  const darkthemeOptions = ThemeDark.find(theme => theme.name === config.theme);

  const { appearanceState } = useAppearance();

  const defaultTheme = appearanceState.activeMode === 'dark' ? coreThemeDark : coreThemeLight;

  const defaultShadow = appearanceState.activeMode === 'dark' ? darkshadows : shadows;

  const themeSelect = appearanceState.activeMode === 'dark' ? darkthemeOptions : lightThemeOptions;

  const baseMode = {
    palette: {
      mode: appearanceState.activeMode
    },
    shape: {
      borderRadius: appearanceState.borderRadius
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
  const { appearanceState } = useAppearance();

  const theme = BuildTheme({ theme: appearanceState.activeTheme });

  return theme;
};

export { ThemeSettings };
