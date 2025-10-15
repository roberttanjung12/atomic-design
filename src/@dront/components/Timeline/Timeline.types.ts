import type { ReactNode } from 'react';

type SemanticColor = 'primary' | 'inherit' | 'grey' | 'secondary' | 'error' | 'info' | 'success' | 'warning';

interface Color {
  color?: SemanticColor;
}

export interface OptionsDot extends Color {
  outlined?: boolean;
}

export interface TimelineData extends Color {
  content?: string | ReactNode;
  opposite?: string | ReactNode;
  disabled?: boolean;
  dotIcon?: string | ReactNode;
}

export interface TimelineProps {
  data: TimelineData[];
  position?: 'left' | 'right' | 'alternate' | 'alternate-reverse';
  dot?: OptionsDot;
  connectorVariant?: 'solid' | 'dashed';
}
