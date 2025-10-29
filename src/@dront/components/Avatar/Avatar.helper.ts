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
