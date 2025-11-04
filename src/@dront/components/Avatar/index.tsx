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
 * @returns {React.JSX} A single avatar or group of avatars
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
