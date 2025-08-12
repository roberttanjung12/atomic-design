import type { ReactNode } from 'react';
import {
  Alert as MuiAlert,
  AlertTitle,
  Typography,
  useTheme,
  alpha,
  type AlertProps as MuiAlertProps,
  type SxProps,
  type Theme,
  Box
} from '@mui/material';

export interface AlertProps {
  /**
   * Severity level of the alert. options (success, error, info, warning)
   */
  severity: 'success' | 'error' | 'info' | 'warning';
  /**
   * Variant of the alert. options (standard, snackbar)
   */
  variant?: 'standard' | 'snackbar';
  /**
   * Optional title to display at the top of the alert.
   */
  title?: string;
  /**
   * The main message content of the alert. Can be a string or a React node.
   */
  message?: string | ReactNode;
  /**
   * Additional props to pass to the underlying MUI Alert component.
   */
  muiAlertProps?: MuiAlertProps;
}

type VariantStyles = {
  muiVariant: 'outlined' | 'filled';
  sx: SxProps<Theme>;
  messageColor: string;
};

/**
 * Alert component for displaying alert messages with configurable severity, variant, title, and message.
 * Integrates with MUI's Alert and supports custom styling and props.
 *
 * @param severity - The severity level of the alert (e.g., 'error', 'warning', 'info', 'success').
 * @param variant - The visual variant of the alert ('standard' or 'snackbar'). Defaults to 'standard'.
 * @param title - Optional title to display at the top of the alert.
 * @param message - The main message content of the alert. Can be a string or a React node.
 * @param muiAlertProps - Additional props to pass to the underlying MUI Alert component.
 *
 * @example
 * <Alert
 *   severity="error"
 *   variant="snackbar"
 *   title="Error"
 *   message="Something went wrong."
 *   muiAlertProps={{ onClose: handleClose }}
 * />
 */
const Alert = ({ severity, variant = 'standard', title, message, muiAlertProps }: AlertProps) => {
  const { palette } = useTheme();

  const variantConfig: Record<'standard' | 'snackbar', VariantStyles> = {
    standard: {
      muiVariant: 'outlined',
      sx: {
        background: alpha(palette[severity].main, 0.1)
      },
      messageColor: palette.mode === 'light' ? 'text.disabled' : 'text.secondary'
    },
    snackbar: {
      muiVariant: 'filled',
      sx: {
        '& .MuiAlert-icon': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        },
        '& .MuiAlert-icon > svg': {
          width: 32,
          height: 32
        }
      },
      messageColor: 'common.white'
    }
  };

  const selectedVariant = variantConfig[variant];

  return (
    <Box sx={{ backgroundColor: 'background.paper', borderRadius: 2 }}>
      <MuiAlert
        severity={severity}
        variant={selectedVariant.muiVariant}
        {...muiAlertProps}
        sx={
          {
            minWidth: 320,
            borderRadius: 2,
            ...selectedVariant.sx,
            ...muiAlertProps?.sx
          } as SxProps<Theme>
        }
      >
        {title && <AlertTitle>{title}</AlertTitle>}
        {typeof message === 'string' ? (
          <Typography variant="caption" color={selectedVariant.messageColor}>
            {message}
          </Typography>
        ) : (
          message
        )}
      </MuiAlert>
    </Box>
  );
};

export default Alert;
