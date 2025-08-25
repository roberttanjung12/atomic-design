import { type ChipProps as MuiChipProps } from '@mui/material';
import { alpha, darken, type Theme } from '@mui/material/styles';
import { type ChipProps } from './Chip.types';

/**
 * Get the main color for the chip based on MUI palette.
 */
export function getMainColor(color: MuiChipProps['color'], theme: Theme, selected = false): string {
  if (!color) {
    return selected ? theme.palette.action.selected : theme.palette.text.primary;
  }

  const colors: Record<Exclude<MuiChipProps['color'], undefined>, string> = {
    default: theme.palette.text.primary,
    primary: theme.palette.primary.main,
    secondary: theme.palette.secondary.main,
    error: theme.palette.error.main,
    warning: theme.palette.warning.main,
    info: theme.palette.info.main,
    success: theme.palette.success.main
  };

  return colors[color] ?? theme.palette.text.primary;
}

/**
 * Get the appropriate contrast color for text/icons inside the chip.
 */
export function getContrastColor(color: MuiChipProps['color'], theme: Theme): string {
  if (!color) return theme.palette.text.primary;

  const contrast: Record<NonNullable<MuiChipProps['color']>, string> = {
    default: theme.palette.text.primary,
    primary: theme.palette.primary.contrastText,
    secondary: theme.palette.secondary.contrastText,
    error: theme.palette.error.contrastText,
    warning: theme.palette.warning.contrastText,
    info: theme.palette.info.contrastText,
    success: theme.palette.success.contrastText
  };

  return contrast[color] ?? theme.palette.text.primary;
}

/**
 * Get custom styles for large-sized chip.
 */
export function getSizeStyles(size: ChipProps['size']) {
  if (size === 'large') {
    return {
      height: 36,
      fontSize: '14px',
      minHeight: 36,
      minWidth: 64,
      lineHeight: '36px',
      width: 'auto',
      borderRadius: 9999,
      maxWidth: 'fit-content'
    };
  }

  return {};
}

/**
 * Get selectable chip styles based on state (selected/unselected).
 */
export function getSelectableStyles(
  color: MuiChipProps['color'],
  theme: Theme,
  selectable: boolean,
  selected: boolean
) {
  if (!selectable) return {};

  const mainColor = getMainColor(color, theme, selected);
  const contrast = getContrastColor(color, theme);

  return selected
    ? {
        backgroundColor: mainColor,
        color: contrast,
        border: `1.5px solid ${mainColor}`,
        '&:hover': {
          backgroundColor: darken(mainColor, 0.1),
          color: contrast,
          border: `1.5px solid ${mainColor}`
        }
      }
    : {
        backgroundColor: 'transparent',
        color: mainColor,
        border: `1.5px solid ${mainColor}`,
        '&:hover': {
          backgroundColor: alpha(mainColor, 0.08),
          color: mainColor,
          border: `1.5px solid ${mainColor}`
        }
      };
}
