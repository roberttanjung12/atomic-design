/**
 * Type definitions for Avatar component and its related entities.
 */

import type { ReactNode } from 'react';

/**
 * Base interface providing alternative text for an avatar.
 */
export interface AvatarAlt {
  /** Alternative text used for accessibility or when image is unavailable. */
  alt: string;
}

/**
 * Base structure for an individual avatar item.
 */
export interface AvatarItemBase extends AvatarAlt {
  /** Image source URL for the avatar. */
  img?: string;
  /** Optional icon to display when no image is provided. */
  icon?: ReactNode;
  /** Click event handler for the avatar item. */
  onClick?: () => void;
}

/**
 * Generic type representing an avatar item with additional custom fields.
 *
 * @typeParam T - Custom object type extending the base avatar structure.
 */
export type AvatarItem<T extends object = Record<string, unknown>> = AvatarItemBase & T;

/**
 * Preset size options for avatars.
 */
export type AvatarSize = 'small' | 'medium' | 'large';

/**
 * Props definition for the Avatar component.
 *
 * @typeParam T - Custom object type extending avatar item data.
 */
export interface AvatarProps<T extends object = Record<string, unknown>> extends AvatarAlt {
  /** Maximum number of avatars to display before showing surplus indicator. */
  max?: number;

  /**
   * Source content for avatar(s).
   *
   * Can be:
   * - A string (image URL)
   * - A single `AvatarItem` object
   * - An array of `AvatarItem` objects
   * - A ReactNode (custom element)
   */
  src?: string | AvatarItem<T> | AvatarItem<T>[] | ReactNode;

  /** Total number of avatars available (used when not all are displayed). */
  total?: number;

  /** Whether to display a “+N” surplus indicator when exceeding max. */
  surplus?: boolean;

  /** Preset size or custom numeric value for avatar size. */
  size?: AvatarSize;

  /** Spacing between avatars, either a number or predefined size. */
  spacing?: number | 'small' | 'medium';

  /** Whether to apply random background color when no image is provided. */
  randomColor?: boolean;

  /** Shape variant of the avatar. */
  variant?: 'square' | 'rounded' | 'circular';

  /** Whether to scale avatar items to fit within container. */
  scale?: boolean;

  /**
   * Click event handler for avatar items.
   *
   * @param item - The clicked avatar item (if available).
   * @param index - Index of the clicked avatar in the list.
   */
  onClick?: (item?: AvatarItem<T>, index?: number) => void;
}
