/**
 * Alternative text for an avatar image or icon.
 *
 * Use this text to describe the avatar for accessibility (e.g. screen readers)
 * and for situations where the image cannot be loaded.
 */

/**
 * Base properties for a single avatar item.
 *
 * - img: Optional URL or source string for the avatar image.
 * - icon: Optional ReactNode to render instead of an image (e.g. an SVG or icon component).
 * - onClick: Optional callback invoked when this specific item is clicked.
 *
 * This type is intended to describe the minimal data every avatar item can carry;
 * it can be extended with custom fields via AvatarItem<T>.
 */

/**
 * An avatar item extended with arbitrary custom fields.
 *
 * @template T - Additional properties to include on the item (defaults to Record<string, unknown>).
 *
 * Combines the common AvatarItemBase shape with any user-defined metadata so consumers
 * can attach IDs, names, roles, or other contextual data to each avatar.
 */

/**
 * Available size variants for an avatar.
 *
 * - 'small'  — compact avatar size
 * - 'medium' — default/regular avatar size
 * - 'large'  — larger avatar size for emphasis
 */

/**
 * Props for the Avatar component.
 *
 * This interface describes the overall configuration and data accepted by an Avatar
 * (or Avatar group) component.
 *
 * @template T - Type of additional fields carried by individual avatar items (used when `src` supplies AvatarItem objects).
 *
 * Properties:
 * - alt: Required alternative text for the avatar(s) used for accessibility.
 * - max: Optional maximum number of avatar items to render before showing an aggregated/surplus indicator.
 * - src: Source for avatar content. May be:
 *     - a string URL for a single image,
 *     - a single AvatarItem<T>,
 *     - an array of AvatarItem<T> for multiple avatars,
 *     - or any ReactNode to render custom content.
 * - total: Optional total count to display when items are summarized (useful when only a subset is rendered).
 * - surplus: If true, indicate remaining/hidden avatars as a single summarized item (e.g. "+3").
 * - size: Size variant for avatars (see AvatarSize).
 * - spacing: Gap between avatars. Accepts a numeric value (pixels) or a preset token 'small' | 'medium'.
 * - randomColor: If true, apply deterministic/random background colors when an image is not provided.
 * - variant: Shape of avatar visuals: 'square', 'rounded', or 'circular'.
 * - scale: If true, enable scaling behavior (e.g. to fit available space or apply a scale transform).
 * - onClick: Optional click handler invoked when an avatar item is clicked; receives the item (if available) and its index.
 *
 * Notes:
 * - When providing an array to `src`, the ordering determines visual stacking/sequence.
 * - Implementations may use `total` and `max` together to compute and render a surplus indicator.
 */

import type { ReactNode } from 'react';

export interface AvatarAlt {
  alt: string;
}

export interface AvatarItemBase extends AvatarAlt {
  img?: string;
  icon?: ReactNode;
  onClick?: () => void;
}

export type AvatarItem<T extends object = Record<string, unknown>> = AvatarItemBase & T;

export type AvatarSize = 'small' | 'medium' | 'large';

export interface AvatarProps<T extends object = Record<string, unknown>> extends AvatarAlt {
  max?: number;
  src?: string | AvatarItem<T> | AvatarItem<T>[] | ReactNode;
  total?: number;
  surplus?: boolean;
  size?: AvatarSize;
  spacing?: number | 'small' | 'medium';
  randomColor?: boolean;
  variant?: 'square' | 'rounded' | 'circular';
  scale?: boolean;
  onClick?: (item?: AvatarItem<T>, index?: number) => void;
}
