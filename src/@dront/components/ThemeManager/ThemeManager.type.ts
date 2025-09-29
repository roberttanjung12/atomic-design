import type { PaletteOptions } from '@mui/material';

/**
 * Represents a logo object containing its URL and associated file.
 *
 * @property {string} url - The URL of the logo image.
 * @property {File | null} file - The logo file object, or `null` if not available.
 */
export interface ILogo {
  url: string;
  file: File | null;
}

/**
 * Represents the configuration for theme management, including palette options and logo variants.
 *
 * @property palette - The color palette options for the theme.
 * @property logo - An object containing different logo variants for dark and light themes, including horizontal and vertical orientations.
 */
export interface IThemeManager {
  palette: PaletteOptions;
  logo: {
    dark: ILogo | null;
    darkHorizontal: ILogo | null;
    light: ILogo | null;
    lightHorizontal: ILogo | null;
    lightVertical: ILogo | null;
    darkVertical: ILogo | null;
  };
}
