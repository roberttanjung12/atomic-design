import { type Theme } from '@mui/material/styles';
import { type ButtonSize, type ButtonVariant, type ButtonColor } from './Button.types';

/**
 * Gets the disabled styles for different variants
 */
const getDisabledStyles = (variant: ButtonVariant, isDarkMode: boolean) => {
  const disabledTextColor = isDarkMode ? '#7C8FAC' : '#7C8FAC';
  const disabledBgColor = isDarkMode ? '#333F55' : '#F2F6FA';
  const disabledBorderColor = isDarkMode ? '#465670' : '#EAEFF4';

  switch (variant) {
    case 'solid':
      return {
        backgroundColor: disabledBgColor,
        color: disabledTextColor,
        border: `1px solid ${disabledBgColor}`,
        cursor: 'not-allowed',
        '&:hover': {
          backgroundColor: disabledBgColor,
          borderColor: disabledBgColor
        }
      };

    case 'outline':
      return {
        backgroundColor: 'transparent',
        color: disabledTextColor,
        border: `1px solid ${disabledBorderColor}`,
        cursor: 'not-allowed',
        '&:hover': {
          backgroundColor: 'transparent',
          color: disabledTextColor,
          borderColor: disabledBorderColor
        }
      };

    case 'text':
      return {
        backgroundColor: 'transparent',
        color: disabledTextColor,
        border: '1px solid transparent',
        cursor: 'not-allowed',
        '&:hover': {
          backgroundColor: 'transparent',
          color: disabledTextColor
        }
      };

    default:
      return {};
  }
};

/**
 * Gets the size-specific styles for the button
 */
export const getSizeStyles = (size: ButtonSize) => {
  const sizeMap = {
    xs: {
      button: {
        height: '28px',
        padding: '0 12px',
        fontSize: '12px',
        lineHeight: '16px'
      },
      iconSize: 12,
      iconSpacing: '4px'
    },
    sm: {
      button: {
        height: '32px',
        padding: '0 16px',
        fontSize: '13px',
        lineHeight: '18px'
      },
      iconSize: 14,
      iconSpacing: '6px'
    },
    md: {
      button: {
        height: '36px',
        padding: '0 20px',
        fontSize: '14px',
        lineHeight: '20px'
      },
      iconSize: 16,
      iconSpacing: '8px'
    },
    lg: {
      button: {
        height: '40px',
        padding: '0 24px',
        fontSize: '15px',
        lineHeight: '22px'
      },
      iconSize: 18,
      iconSpacing: '8px'
    },
    xl: {
      button: {
        height: '44px',
        padding: '0 28px',
        fontSize: '16px',
        lineHeight: '24px'
      },
      iconSize: 20,
      iconSpacing: '10px'
    }
  };

  return sizeMap[size];
};

/**
 * Gets the variant and color-specific styles for the button
 */
export const getVariantStyles = (variant: ButtonVariant, color: ButtonColor, theme: Theme, isDisabled: boolean) => {
  const isDarkMode = theme.palette.mode === 'dark';

  if (isDisabled) {
    return getDisabledStyles(variant, isDarkMode);
  }

  // Map our button colors to MUI theme palette
  const colorMap = {
    primary: theme.palette.primary,
    success: theme.palette.success,
    danger: theme.palette.error, // danger maps to error in MUI
    warning: theme.palette.warning,
    info: theme.palette.info
  };

  const colors = colorMap[color];
  const textColor = theme.palette.getContrastText ? theme.palette.getContrastText(colors.main) : '#ffffff';

  switch (variant) {
    case 'solid':
      return {
        backgroundColor: colors.main,
        color: textColor,
        border: `1px solid ${colors.main}`,
        '&:hover': {
          backgroundColor: colors.dark,
          borderColor: colors.dark
        },
        '&:active': {
          backgroundColor: colors.dark,
          borderColor: colors.dark,
          transform: 'scale(0.98)'
        },
        '&:focus-visible': {
          backgroundColor: colors.dark,
          borderColor: colors.dark,
          outline: `2px solid ${colors.main}`,
          outlineOffset: '2px'
        }
      };

    case 'outline':
      return {
        backgroundColor: 'transparent',
        color: colors.main,
        border: `1px solid ${colors.main}`,
        '&:hover': {
          backgroundColor: colors.main,
          color: textColor,
          borderColor: colors.main
        },
        '&:active': {
          backgroundColor: colors.dark,
          color: textColor,
          borderColor: colors.dark,
          transform: 'scale(0.98)'
        },
        '&:focus-visible': {
          backgroundColor: 'transparent',
          color: colors.main,
          borderColor: colors.dark,
          outline: `2px solid ${colors.main}`,
          outlineOffset: '2px'
        }
      };

    case 'text':
      return {
        backgroundColor: 'transparent',
        color: colors.main,
        border: '1px solid transparent',
        '&:hover': {
          backgroundColor: colors.light,
          color: colors.main
        },
        '&:active': {
          backgroundColor: colors.light,
          color: colors.dark,
          transform: 'scale(0.98)'
        },
        '&:focus-visible': {
          backgroundColor: colors.light,
          color: colors.main,
          outline: `2px solid ${colors.main}`,
          outlineOffset: '2px'
        }
      };

    default:
      return {};
  }
};

/**
 * Gets the loading-specific styles for the button
 */
export const getLoadingStyles = (loading: boolean) => {
  return {
    cursor: loading ? ('not-allowed' as const) : ('pointer' as const),
    pointerEvents: loading ? ('none' as const) : ('auto' as const)
  };
};
