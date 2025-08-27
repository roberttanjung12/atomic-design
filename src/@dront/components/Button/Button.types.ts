import type React from 'react';
import { type ButtonProps as MuiButtonProps } from '@mui/material';

/**
 * Button size options
 */
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

/**
 * Button variant options
 */
export type ButtonVariant = 'solid' | 'outline' | 'text';

/**
 * Button color options
 */
export type ButtonColor = 'primary' | 'info' | 'success' | 'warning' | 'danger';

/**
 * Props for the Button component.
 */
export interface ButtonProps extends Omit<MuiButtonProps, 'size' | 'variant' | 'color'> {
  /**
   * The content to display inside the button.
   */
  children: React.ReactNode;

  /**
   * The visual style variant of the button.
   *
   * @default 'solid'
   */
  variant?: ButtonVariant;

  /**
   * The size of the button.
   *
   * @default 'md'
   */
  size?: ButtonSize;

  /**
   * The color theme of the button.
   *
   * @default 'primary'
   */
  color?: ButtonColor;

  /**
   * Whether the button is disabled.
   *
   * @default false
   */
  disabled?: boolean;

  /**
   * Whether the button is in a loading state.
   * When true, shows a spinner and disables interactions.
   *
   * @default false
   */
  loading?: boolean;

  /**
   * Icon to display at the start (left) of the button content.
   */
  startIcon?: React.ReactNode;

  /**
   * Icon to display at the end (right) of the button content.
   */
  endIcon?: React.ReactNode;

  /**
   * Whether the button should expand to fill its container width.
   *
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Click event handler.
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

  /**
   * Accessibility label for screen readers.
   */
  'aria-label'?: string;
}
