'use client';

import React, { type ReactNode } from 'react';
import { Box, lighten, Tooltip, Typography, useTheme, type BoxProps, type Theme } from '@mui/material';
import type { SystemStyleObject } from '@mui/system';
import clsx from 'clsx';

type StatusColor = 'success' | 'error' | 'warning' | 'info' | 'secondary';

type StatusVariant = 'outlined' | 'contained' | 'text';

interface StatusIndicatorProps {
  /**
   * The label text displayed next to the status dot.
   * If not provided, it will default to the capitalized color name.
   */
  label: ReactNode;

  /**
   * The color of the status indicator.
   * Use "custom" if you want to provide your own color via `customColor`.
   *
   * @default 'success'
   */
  color?: StatusColor;

  /**
   * The style variant of the status indicator.
   *
   * @default 'text'
   */
  variant?: StatusVariant;

  /**
   * The size (diameter) of the status dot in pixels.
   *
   * @default 12
   */
  size?: number;

  /**
   * Tooltip text to be shown on hover/tap
   */
  tooltip?: string | React.ReactNode;

  /**
   * Slot props for customizing components of the StatusIndicator.
   *
   * @example
   * ```tsx
   * <StatusIndicator
   *   label="Active"
   *   slotProps={{
   *     root: {
   *       className: 'my-custom-class',
   *       sx: { backgroundColor: 'lightblue' }
   *     }
   *   }}
   * />
   * ```
   */
  slotProps?: {
    root?: BoxProps;
  };
}

/**
 * Get the main color for the status indicator based on the given `color` prop.
 *
 * @param color - The status color name.
 * @param theme - The MUI theme object.
 * @returns A CSS color string.
 */
function getMainColor(color: StatusColor, theme: Theme): string {
  const muiColors: Record<StatusColor, string> = {
    success: theme.palette.success.main,
    error: theme.palette.error.main,
    warning: theme.palette.warning.main,
    info: theme.palette.info.main,
    secondary: theme.palette.secondary.main
  };

  return muiColors[color] ?? theme.palette.text.primary;
}

/**
 * Get the main color for the status indicator based on the given `color` prop.
 *
 * @param color - The status color name.
 * @param theme - The MUI theme object.
 * @returns A CSS color string.
 */
function getLightColor(color: StatusColor, theme: Theme): string {
  const muiColors: Record<Exclude<StatusColor, 'custom'>, string> = {
    success: lighten(theme.palette.success.main, 0.9),
    error: lighten(theme.palette.error.main, 0.9),
    warning: lighten(theme.palette.warning.main, 0.9),
    info: lighten(theme.palette.info.main, 0.9),
    secondary: lighten(theme.palette.secondary.main, 0.9)
  };

  return muiColors[color] ?? theme.palette.text.primary;
}

/**
 * Get container styles based on the variant.
 *
 * @param variant - The style variant.
 * @param mainColor - The primary color of the indicator.
 * @returns An object of styles for the container.
 */
function getBaseStyles(variant: StatusVariant, mainColor: string, borderColor: string): SystemStyleObject<Theme> {
  switch (variant) {
    case 'contained':
      return {
        backgroundColor: mainColor,
        padding: '4px 12px',
        borderRadius: '16px'
      };
    case 'outlined':
      return {
        backgroundColor: mainColor,
        border: `1px solid ${borderColor}`,
        padding: '4px 12px',
        borderRadius: '16px'
      };
    default:
      return {
        padding: '4px 12px'
      };
  }
}

/**
 * StatusIndicator Component
 *
 * Displays a colored status dot alongside a label.
 * Supports multiple colors, variants, and custom sizes.
 *
 * @example
 * ```tsx
 * import React from "react";
 * import StatusIndicator from "./StatusIndicator";
 *
 * export default function App() {
 *   return (
 *     <StatusIndicator color="success" variant="text" label="Enabled" />
 *   );
 * }
 * ```
 */
const StatusIndicator = ({
  label,
  color = 'success',
  variant = 'text',
  size = 12,
  tooltip,
  slotProps
}: StatusIndicatorProps) => {
  const theme = useTheme();
  const mainColor = getMainColor(color, theme);
  const lightColor = getLightColor(color, theme);
  const baseSx = getBaseStyles(variant, lightColor, mainColor);
  const baseClassName = 'dront-status-indicator';

  const { sx: rootSx = {}, className: rootClassName, ...rootProps } = slotProps?.root ?? {};

  const content = (
    <Box
      className={clsx(baseClassName, `${baseClassName}--${color}`, `${baseClassName}--${variant}`, rootClassName)}
      display="inline-flex"
      alignItems="center"
      gap={1}
      width="fit-content"
      {...rootProps}
      sx={[baseSx, ...(Array.isArray(rootSx) ? rootSx : [rootSx])]}
    >
      <Box
        className={`${baseClassName}__dot`}
        sx={{
          width: size,
          height: size,
          borderRadius: '50%',
          backgroundColor: mainColor
        }}
      />
      <Typography className={`${baseClassName}__label`} sx={[{ color: mainColor, fontWeight: 500 }]}>
        {label}
      </Typography>
    </Box>
  );

  if (tooltip) {
    return (
      <Tooltip title={tooltip} arrow>
        {content}
      </Tooltip>
    );
  }

  return content;
};

export default StatusIndicator;
