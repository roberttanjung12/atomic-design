/**
 * Generates a style object that adds a hover transform and shadow effect.
 *
 * This helper returns CSS-in-JS style rules including a transition for transform
 * and box-shadow. When `scale` is true, the hover rules will include a scaling
 * and upward translation transform.
 *
 * @internal
 * @param scale - When true, include a scaling/translation transform on hover.
 * @returns An object suitable for use as MUI `sx` or other CSS-in-JS style rules.
 */

/**
 * Pick a pseudo-random background color from a predefined palette.
 *
 * This helper returns a single hex color string selected uniformly at random
 * from a small built-in array of colors.
 *
 * @internal
 * @returns A hex color string (e.g. "#2196F3").
 */

/**
 * Compose the avatar style (`sx`) object based on whether an image is present,
 * whether a random background color should be applied, and whether hover scaling
 * is enabled.
 *
 * The returned object includes base transform and zIndex values and merges the
 * hover effect styles. If `hasImg` is false and `randomColor` is true, a
 * randomly chosen background color (from the internal palette) will be added
 * under the `bgcolor` key.
 *
 * @param hasImg - True if the avatar has an image; when true, no random bgcolor is applied.
 * @param randomColor - When true and `hasImg` is false, a random bgcolor will be added.
 * @param scale - When true, hover styles will include a transform that scales and lifts the avatar.
 * @returns An object representing styles for use with MUI `sx` or similar CSS-in-JS systems.
 */

/**
 * Compute display initials for a given full name.
 *
 * Trims surrounding whitespace and splits the name on any whitespace. If the
 * name is empty or only whitespace, returns an empty string. For single-word
 * names, returns the first letter. For multi-word names, returns the first
 * letter of the first word combined with the first letter of the last word,
 * both uppercased.
 *
 * Examples:
 * - "Ada Lovelace" -> "AL"
 * - "plato" -> "P"
 * - "  " -> ""
 *
 * @param name - The full name from which to derive initials.
 * @returns A 0-2 character uppercase string representing the initials.
 */

/**
 * Return width/height dimensions for a given avatar size keyword.
 *
 * Supported size keys:
 * - "small": returns { width: 24, height: 24 }
 * - "large": returns { width: 56, height: 56 }
 * For any other value (including the default/normal size), an empty object is returned
 * so that default styling can apply.
 *
 * @param size - The avatar size keyword.
 * @returns An object containing numeric `width` and `height` properties for known sizes, or an empty object.
 */

import type { AvatarSize } from './Avatar.types';

const hoverEffect = (scale: boolean) => {
  return {
    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
    willChange: 'transform',
    '&:hover': {
      ...(scale && { transform: 'scale(1.2) translateY(-6px)' }),
      zIndex: 10,
      boxShadow: '0 2px 3px rgba(0, 0, 0, 0.25)'
    }
  };
};

const generateRandomBg = () => {
  const colors = ['#F44336', '#E91E63', '#9C27B0', '#3F51B5', '#2196F3', '#009688', '#4CAF50', '#FF9800'];

  return colors[Math.floor(Math.random() * colors.length)];
};

export const getAvatarSx = (hasImg: boolean, randomColor: boolean, scale: boolean) => {
  const base = {
    transform: 'none',
    zIndex: 'auto',
    ...hoverEffect(scale)
  };

  if (!hasImg && randomColor) {
    return { bgcolor: generateRandomBg(), ...base };
  }

  return base;
};

export function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);

  if (parts.length === 0) {
    return '';
  }

  const firstInitial = parts[0][0].toUpperCase();

  if (parts.length === 1) {
    return firstInitial;
  }

  const lastInitial = parts[parts.length - 1][0].toUpperCase();
  const initial = firstInitial + lastInitial;

  return initial;
}

export function getAvatarSize(size: AvatarSize) {
  if (size === 'small') return { width: 24, height: 24 };
  if (size === 'large') return { width: 56, height: 56 };

  return {};
}
