'use client';

import React from 'react';
import { Chip as MuiChip, Tooltip, useTheme } from '@mui/material';
import { getSizeStyles, getSelectableStyles } from './Chip.helpers';
import { type ChipProps } from './Chip.types';

/**
 * Chip Component
 *
 * Extended MUI Chip with support for `large` size,
 * selectable states, tooltip, and consistent styling.
 *
 * @example
 * ```tsx
 * <Chip label="Active" color="success" selectable selected />
 * <Chip label="Error" color="error" tooltip="Something went wrong" />
 * ```
 */
const Chip = ({
  tooltip,
  size = 'medium',
  selectable = false,
  selected = false,
  onClick,
  color,
  ...props
}: ChipProps) => {
  const theme = useTheme();

  const chip = (
    <MuiChip
      {...props}
      size={size === 'large' ? undefined : size}
      color={selectable ? undefined : color}
      sx={{
        borderRadius: '16px',
        fontWeight: 500,
        ...getSizeStyles(size),
        ...getSelectableStyles(color, theme, selectable, selected),
        ...props.sx
      }}
      onClick={onClick}
      clickable={selectable}
      disabled={props.disabled}
    />
  );

  if (tooltip) {
    return (
      <Tooltip title={tooltip} arrow>
        {chip}
      </Tooltip>
    );
  }

  return chip;
};

export default Chip;
