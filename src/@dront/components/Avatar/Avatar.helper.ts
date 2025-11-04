import type { AvatarSize } from './Avatar.types';

/**
 * Generates hover effect styles for avatar elements.
 *
 * @param scale - Whether to apply a scaling and lifting effect on hover.
 * @returns An object containing CSS transition and hover styles.
 *
 * @example
 * ```ts
 * const styles = hoverEffect(true);
 * // => { transition: 'transform 0.25s ease, ...', '&:hover': { transform: 'scale(1.2) translateY(-6px)' } }
 * ```
 */
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

/**
 * Generates a random background color from a predefined palette.
 *
 * @returns A random hexadecimal color string.
 *
 * @example
 * ```ts
 * const color = generateRandomBg();
 * // => "#3F51B5"
 * ```
 */
const generateRandomBg = () => {
  const colors = ['#F44336', '#E91E63', '#9C27B0', '#3F51B5', '#2196F3', '#009688', '#4CAF50', '#FF9800'];

  return colors[Math.floor(Math.random() * colors.length)];
};

/**
 * Returns avatar styling configuration based on image presence, color mode, and scale behavior.
 *
 * @param hasImg - Indicates whether the avatar has an image source.
 * @param randomColor - Whether to apply a random background color when no image is provided.
 * @param scale - Whether to apply scaling hover effects.
 * @returns An object containing MUI `sx` style properties for the avatar.
 *
 * @example
 * ```ts
 * const sx = getAvatarSx(false, true, true);
 * // => { bgcolor: '#E91E63', transition: 'transform ...', '&:hover': { transform: 'scale(1.2)' } }
 * ```
 */
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

/**
 * Extracts initials from a full name string.
 *
 * @param name - The full name string to extract initials from.
 * @returns A string containing the first and last initials in uppercase.
 *
 * @example
 * ```ts
 * getInitials('Rao The Grand Magus');
 * // => "RM"
 * ```
 */
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

/**
 * Returns width and height settings for the avatar based on size preset.
 *
 * @param size - Avatar size preset value ('small', 'medium', or 'large').
 * @returns An object containing width and height values for the avatar.
 *
 * @example
 * ```ts
 * getAvatarSize('small');
 * // => { width: 24, height: 24 }
 * ```
 */
export function getAvatarSize(size: AvatarSize) {
  if (size === 'small') return { width: 24, height: 24 };
  if (size === 'large') return { width: 56, height: 56 };

  return {};
}
