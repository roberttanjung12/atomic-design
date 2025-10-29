'use client';

import type { ReactNode } from 'react';
import { AvatarGroup, ButtonBase, Avatar as MuiAvatar } from '@mui/material';
import { getAvatarSize, getAvatarSx, getInitials } from './Avatar.helper';
import type { AvatarProps, AvatarItem } from './Avatar.types';

/**
 * A customizable Avatar component that can display images, icons, or text initials.
 * Supports single avatar or group of avatars with various styling options.
 *
 * @template T - Generic type for additional avatar item properties
 *
 * @param props - The avatar component props
 * @param {string | AvatarItem<T> | ReactNode | Array<string | AvatarItem<T> | ReactNode> | null} props.src - Source for avatar content (image URL, avatar item object, React node, or array of these)
 * @param {string} [props.alt] - Alternative text for the avatar
 * @param {number} [props.max] - Maximum number of avatars to show in group
 * @param {number} [props.total] - Total number of avatars in group
 * @param {boolean} [props.surplus] - Whether to show surplus count for grouped avatars
 * @param {'small' | 'medium' | 'large'} [props.size='medium'] - Size of the avatar
 * @param {'small' | 'medium'} [props.spacing='medium'] - Spacing between avatars in group
 * @param {'circular' | 'rounded' | 'square'} [props.variant='circular'] - Shape variant of the avatar
 * @param {boolean} [props.randomColor=false] - Whether to use random background colors
 * @param {boolean} [props.scale=false] - Whether to enable scaling effect on hover
 * @param {(item?: AvatarItem<T>, index?: number) => void} [props.onClick] - Click handler for the avatar
 *
 * @returns {JSX.Element} A single avatar or group of avatars
 *
 * @example
 * // Single avatar with image
 * <Avatar src="https://example.com/avatar.jpg" alt="User Avatar" />
 *
 * @example
 * // Group of avatars
 * <Avatar
 *   src={[
 *     { img: "https://example.com/avatar1.jpg", alt: "User 1" },
 *     { img: "https://example.com/avatar2.jpg", alt: "User 2" }
 *   ]}
 *   max={3}
 *   size="medium"
 * />
 */
const Avatar = <T extends object = Record<string, unknown>>({
  src,
  alt,
  max,
  total,
  surplus,
  size = 'medium',
  spacing = 'medium',
  variant = 'circular',
  randomColor = false,
  scale = false,
  onClick,
  ...props
}: AvatarProps<T>): Readonly<ReactNode> => {
  const renderMuiAvatar = (item: string | AvatarItem<T> | ReactNode | null | undefined, key?: number) => {
    if (item == null) return null;

    const handleClick = () => {
      if (typeof item === 'object' && !Array.isArray(item)) {
        onClick?.(item as AvatarItem<T>, key);
        (item as AvatarItem<T>).onClick?.();
      } else {
        onClick?.(undefined, key);
      }
    };

    if (
      typeof item === 'object' &&
      !Array.isArray(item) &&
      !('img' in (item as AvatarItem<T>)) &&
      !('icon' in (item as AvatarItem<T>)) &&
      !('alt' in (item as AvatarItem<T>))
    ) {
      return (
        <MuiAvatar
          {...props}
          key={key}
          component={ButtonBase}
          onClick={handleClick}
          alt={alt}
          variant={variant}
          sx={{ ...getAvatarSx(false, randomColor, scale), ...getAvatarSize(size) }}
        >
          {item as ReactNode}
        </MuiAvatar>
      );
    }

    const value = typeof item === 'string' ? ({ img: item, alt } as AvatarItem<T>) : (item as AvatarItem<T>);

    const hasImg = typeof value.img === 'string' && (value.img.startsWith('http') || value.img.startsWith('/images/'));

    const content =
      (value as Partial<AvatarItem<T>>).icon ??
      (!hasImg && (value as Partial<AvatarItem<T>>).alt
        ? getInitials((value as Partial<AvatarItem<T>>).alt!)
        : undefined);

    return (
      <MuiAvatar
        {...props}
        key={key}
        component={ButtonBase}
        onClick={handleClick}
        alt={value.alt || alt}
        variant={variant}
        src={hasImg ? value.img : undefined}
        sx={{ ...getAvatarSx(hasImg, randomColor, scale), ...getAvatarSize(size) }}
      >
        {content}
      </MuiAvatar>
    );
  };

  if (Array.isArray(src)) {
    return (
      <AvatarGroup
        spacing={spacing}
        max={max}
        total={total}
        {...(surplus && {
          renderSurplus: (extra: number) => <span>+{extra >= 1000 ? `${Math.floor(extra / 1000)}k` : extra}</span>
        })}
      >
        {src.map((item, i) => renderMuiAvatar(item, i))}
      </AvatarGroup>
    );
  }

  return renderMuiAvatar(src);
};

export default Avatar;
