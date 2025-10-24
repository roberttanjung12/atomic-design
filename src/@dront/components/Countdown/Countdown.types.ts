import type { TypographyVariant } from '@mui/material';

export type CountdownProps = {
  targetDate: string;
  separator?: string;
  variant?: 'block' | 'compact' | 'minimal';
  direction?: 'vertical' | 'horizontal';
  showDays?: boolean;
  size?: 'small' | 'medium' | 'large';
  className?: string;
  spacing?: number;
};

export type CountdownRendererProps = {
  variant: NonNullable<CountdownProps['variant']>;
  direction: NonNullable<CountdownProps['direction']>;
  segments: { label: string; value: number }[];
  numberVariant: TypographyVariant;
  labelVariant: TypographyVariant;
  separator: string;
  resolvedSpacing: number;
  className?: string;
};

export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
