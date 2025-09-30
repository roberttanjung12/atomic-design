'use client';

import React from 'react';
import { Button as MuiButton, CircularProgress, useTheme } from '@mui/material';
import { getSizeStyles, getVariantStyles, getLoadingStyles } from './Button.helpers';
import { type ButtonProps } from './Button.types';

/**
 * Button Component
 *
 * A reusable button component with multiple variants, sizes, and states.
 * Supports loading states, icons, and accessibility features.
 */
const Button = ({
  children,
  variant = 'solid',
  size = 'md',
  color = 'primary',
  disabled = false,
  loading = false,
  startIcon,
  endIcon,
  fullWidth = false,
  onClick,
  ...props
}: ButtonProps) => {
  const theme = useTheme();

  const isDisabled = disabled || loading;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!isDisabled && onClick) {
      onClick(event);
    }
  };

  const sizeStyles = getSizeStyles(size);
  const variantStyles = getVariantStyles(variant, color, theme, isDisabled);
  const loadingStyles = getLoadingStyles(loading);

  const loadingSpinner = loading && (
    <CircularProgress
      size={sizeStyles.iconSize}
      sx={{
        color: variantStyles.color,
        position: 'absolute',
        zIndex: 1
      }}
    />
  );

  const startIconElement = !loading && startIcon && (
    <span
      style={{
        fontSize: sizeStyles.iconSize,
        marginRight: sizeStyles.iconSpacing,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {startIcon}
    </span>
  );

  const endIconElement = !loading && endIcon && (
    <span
      style={{
        fontSize: sizeStyles.iconSize,
        marginLeft: sizeStyles.iconSpacing,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {endIcon}
    </span>
  );

  return (
    <MuiButton
      {...props}
      disabled={isDisabled}
      onClick={handleClick}
      fullWidth={fullWidth}
      disableRipple={isDisabled}
      disableElevation
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        textTransform: 'none',
        fontWeight: 500,
        borderRadius: '8px',
        border: variantStyles.border || 'none',
        backgroundColor: variantStyles.backgroundColor || 'transparent',
        color: variantStyles.color || 'inherit',
        height: sizeStyles.button.height,
        padding: sizeStyles.button.padding,
        fontSize: sizeStyles.button.fontSize,
        cursor: loadingStyles.cursor,
        pointerEvents: loadingStyles.pointerEvents,
        transition: '0.2s ease-in-out',
        outline: 'none'
      }}
      aria-label={props['aria-label'] || (typeof children === 'string' ? children : undefined)}
      aria-disabled={isDisabled}
    >
      {loadingSpinner}
      {startIconElement}
      <span style={{ opacity: loading ? 0 : 1 }}>{children}</span>
      {endIconElement}
    </MuiButton>
  );
};

export default Button;
