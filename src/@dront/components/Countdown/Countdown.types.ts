import type { SxProps, Theme, TypographyVariant } from '@mui/material';

interface StylingSx {
  dayNumberSx?: SxProps<Theme>;
  dayLabelSx?: SxProps<Theme>;
  hourNumberSx?: SxProps<Theme>;
  hourLabelSx?: SxProps<Theme>;
  minNumberSx?: SxProps<Theme>;
  minLabelSx?: SxProps<Theme>;
  secNumberSx?: SxProps<Theme>;
  secLabelSx?: SxProps<Theme>;

  labelSx?: SxProps<Theme>;
  numberSx?: SxProps<Theme>;
  sx?: SxProps<Theme>;
}

export interface CountdownProps extends StylingSx {
  targetDate: Date;
  separator?: string;
  variant?: 'block' | 'compact' | 'minimal';
  direction?: 'vertical' | 'horizontal';
  showDays?: boolean;
  size?: 'small' | 'medium' | 'large' | number;
  className?: string;
  spacing?: number;
  showOnly?: 'day' | 'hour' | 'min' | 'sec';
  onOver?: () => void;
}

export interface CountdownRendererProps extends StylingSx {
  variant: NonNullable<CountdownProps['variant']>;
  direction: NonNullable<CountdownProps['direction']>;
  segments: { label: string; value: number }[];
  numberVariant: TypographyVariant;
  labelVariant: TypographyVariant;
  separator: string;
  spacing: number;
  className?: string;
  customFontSize?: number;
}

export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
