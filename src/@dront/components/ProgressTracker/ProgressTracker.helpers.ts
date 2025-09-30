import { type Theme } from '@mui/material/styles';
import { type ProgressTrackerSize, type StepStatus } from './ProgressTracker.types';

export const getSizeStyles = (size: ProgressTrackerSize) => {
  const sizeMap = {
    sm: {
      stepSize: 32,
      iconSize: 16,
      fontSize: '0.75rem',
      spacing: 16,
      connectorHeight: 2,
      labelSpacing: 8
    },
    md: {
      stepSize: 40,
      iconSize: 20,
      fontSize: '0.875rem',
      spacing: 24,
      connectorHeight: 2,
      labelSpacing: 12
    },
    lg: {
      stepSize: 48,
      iconSize: 24,
      fontSize: '1rem',
      spacing: 32,
      connectorHeight: 3,
      labelSpacing: 16
    }
  };

  return sizeMap[size];
};

export const getStepStyles = (
  status: StepStatus,
  color: 'primary' | 'secondary' | 'success' | 'warning' | 'error',
  theme: Theme,
  isClickable: boolean = false,
  isDisabled: boolean = false
) => {
  const colorPalette = theme.palette[color];

  if (isDisabled) {
    return {
      backgroundColor: theme.palette.action.disabled,
      color: theme.palette.action.disabled,
      borderColor: theme.palette.action.disabled,
      cursor: 'not-allowed'
    };
  }

  const baseStyles = {
    cursor: isClickable ? 'pointer' : 'default',
    transition: theme.transitions.create(['background-color', 'border-color', 'color'], {
      duration: theme.transitions.duration.short
    })
  };

  switch (status) {
    case 'completed':
      return {
        ...baseStyles,
        backgroundColor: colorPalette.main,
        color: colorPalette.contrastText,
        borderColor: colorPalette.main,
        '&:hover': isClickable
          ? {
              backgroundColor: colorPalette.dark,
              borderColor: colorPalette.dark
            }
          : {}
      };

    case 'active':
      return {
        ...baseStyles,
        backgroundColor: theme.palette.background.paper,
        color: colorPalette.main,
        borderColor: colorPalette.main,
        borderWidth: 2,
        '&:hover': isClickable
          ? {
              backgroundColor: theme.palette.action.hover
            }
          : {}
      };

    case 'inactive':
    default:
      return {
        ...baseStyles,
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.disabled,
        borderColor: theme.palette.divider,
        '&:hover': isClickable
          ? {
              backgroundColor: theme.palette.action.hover,
              borderColor: theme.palette.action.selected
            }
          : {}
      };
  }
};

export const getConnectorStyles = (
  active: boolean,
  orientation: 'horizontal' | 'vertical',
  size: ProgressTrackerSize,
  color: 'primary' | 'secondary' | 'success' | 'warning' | 'error',
  theme: Theme
) => {
  const sizeStyles = getSizeStyles(size);
  const colorPalette = theme.palette[color];

  const baseStyles = {
    backgroundColor: active ? colorPalette.main : theme.palette.divider,
    transition: theme.transitions.create('background-color', {
      duration: theme.transitions.duration.short
    })
  };

  if (orientation === 'horizontal') {
    return {
      ...baseStyles,
      height: sizeStyles.connectorHeight,
      flex: 1,
      minWidth: sizeStyles.spacing
    };
  }

  return {
    ...baseStyles,
    width: sizeStyles.connectorHeight,
    flex: 1,
    minHeight: sizeStyles.spacing
  };
};

export const getLabelStyles = (
  status: StepStatus,
  color: 'primary' | 'secondary' | 'success' | 'warning' | 'error',
  theme: Theme
) => {
  const colorPalette = theme.palette[color];

  switch (status) {
    case 'completed':
      return {
        color: theme.palette.text.primary,
        fontWeight: theme.typography.fontWeightMedium
      };

    case 'active':
      return {
        color: colorPalette.main,
        fontWeight: theme.typography.fontWeightBold
      };

    case 'inactive':
    default:
      return {
        color: theme.palette.text.secondary,
        fontWeight: theme.typography.fontWeightRegular
      };
  }
};

export const calculateStepStatus = (stepIndex: number, activeStep: number): StepStatus => {
  if (stepIndex < activeStep) {
    return 'completed';
  }
  if (stepIndex === activeStep) {
    return 'active';
  }

  return 'inactive';
};

export const getConnectorContainerStyles = (orientation: 'horizontal' | 'vertical', size: ProgressTrackerSize) => {
  const sizeStyles = getSizeStyles(size);

  if (orientation === 'horizontal') {
    return {
      display: 'flex',
      alignItems: 'center',
      height: sizeStyles.stepSize,
      flex: 1,
      minWidth: sizeStyles.spacing
    };
  }

  return {
    display: 'flex',
    alignItems: 'center',
    width: sizeStyles.stepSize,
    flex: 1,
    minHeight: sizeStyles.spacing,
    flexDirection: 'column' as const
  };
};

export const getResponsiveStyles = (theme: Theme) => ({
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column' as const,
    alignItems: 'flex-start'
  },
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row' as const,
    alignItems: 'center'
  }
});
