import * as locales from '@mui/material/locale';
import { createTheme, type Theme } from '@mui/material/styles';
import merge from 'lodash/merge';
import appearanceConfiguration from '@/store/slice/appearance/appearanceConfiguration';
import components from './Components';
import { shadows, darkshadows } from './Shadows';
import { coreThemeDark, coreThemeLight } from './ThemeCore';
import { ThemeDark } from './ThemeDark';
import { ThemeLight, type ThemeLightName } from './ThemeLight';
import typography from './Typography';

type Mode = 'light' | 'dark';

/**
 * Configuration options for creating an MUI theme.
 */
interface ThemeConfig {
  /**
   * Optional theme variant name.
   */
  theme?: ThemeLightName;

  /**
   * Text direction for the theme.
   * `'ltr'` for left-to-right, `'rtl'` for right-to-left.
   */
  direction?: 'ltr' | 'rtl';

  /**
   * Color mode for the theme.
   */
  mode?: Mode;
}

/**
 * Generates the base theme configuration shared by all themes
 * before merging with core, locale, and custom overrides.
 *
 * @param mode - The palette mode (`'light'` or `'dark'`).
 * @returns A base MUI theme configuration object.
 */
const createBaseThemeConfig = (mode: Mode) => ({
  palette: {
    mode
  },
  shape: {
    borderRadius: appearanceConfiguration.borderRadius
  },
  shadows: mode === 'light' ? shadows : darkshadows,
  typography
});

/**
 * Finds the theme options matching the given mode and theme name.
 *
 * @param mode - The palette mode.
 * @param themeName - Optional theme variant name.
 * @returns The theme options object, or an empty object if no match is found.
 */
const findThemeOptions = (mode: Mode, themeName?: ThemeLightName) => {
  const themeList = mode === 'light' ? ThemeLight : ThemeDark;

  return themeList.find(theme => theme.name === themeName) || {};
};

/**
 * Builds a single MUI theme by merging base settings,
 * core theme, locale-specific overrides, and custom theme options.
 *
 * @param mode - The palette mode.
 * @param config - Optional theme configuration.
 * @returns A fully constructed MUI `Theme` object.
 */
const buildSingleTheme = (mode: Mode, config: ThemeConfig = {}): Theme => {
  const baseConfig = createBaseThemeConfig(mode);
  const coreTheme = mode === 'light' ? coreThemeLight : coreThemeDark;
  const themeOptions = findThemeOptions(mode, config.theme);
  const mergedTheme = merge({}, baseConfig, coreTheme, locales, themeOptions, {
    direction: config.direction
  });
  const muiTheme = createTheme(mergedTheme);

  muiTheme.components = components(muiTheme);

  return muiTheme;
};

/**
 * Creates both light and dark themes based on the provided configuration.
 *
 * @param config - Optional theme configuration.
 * @returns An object containing `light` and `dark` MUI themes.
 *
 * @example
 * const { light, dark } = BuildTheme({ theme: 'Blue', direction: 'ltr' });
 */
export const BuildTheme = (config: ThemeConfig = {}) => ({
  light: buildSingleTheme('light', config),
  dark: buildSingleTheme('dark', config)
});
