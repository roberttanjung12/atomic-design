import type React from 'react';
import { type ChipProps as MuiChipProps } from '@mui/material';

/**
 * Props for the Chip component.
 */
export interface ChipProps {
  /**
   * The text label displayed inside the chip.
   */
  label: string;

  /**
   * The size of the chip.
   *
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * The color theme of the chip.
   */
  color?: 'default' | 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';

  /**
   * The style variant of the chip.
   *
   * @default 'filled'
   */
  variant?: 'filled' | 'outlined';

  /**
   * Tooltip text or element to display on hover/tap.
   */
  tooltip?: string | React.ReactNode;

  /**
   * Whether the chip can be selected.
   *
   * @default false
   */
  selectable?: boolean;

  /**
   * Whether the chip is currently selected.
   *
   * @default false
   */
  selected?: boolean;

  /**
   * Click handler for the chip.
   */
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;

  /**
   * Handler for the delete icon.
   */
  onDelete?: MuiChipProps['onDelete'];

  /**
   * Optional leading icon.
   */
  icon?: MuiChipProps['icon'];

  /**
   * Optional leading avatar.
   */
  avatar?: MuiChipProps['avatar'];

  /**
   * Additional `sx` styles.
   */
  sx?: MuiChipProps['sx'];

  /**
   * If true, the chip is disabled.
   *
   * @default false
   */
  disabled?: boolean;
}
