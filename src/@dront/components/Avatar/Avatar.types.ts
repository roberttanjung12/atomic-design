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
