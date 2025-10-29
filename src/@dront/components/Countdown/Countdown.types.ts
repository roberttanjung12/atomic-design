/**
 * Style customization interface for countdown component
 */
import type { ReactNode } from 'react';
import type { SxProps, Theme, TypographyVariant } from '@mui/material';

interface StylingSx {
  /** Custom styles for day number typography */
  dayNumberSx?: SxProps<Theme>;
  /** Custom styles for day label typography */
  dayLabelSx?: SxProps<Theme>;
  /** Custom styles for hour number typography */
  hourNumberSx?: SxProps<Theme>;
  /** Custom styles for hour label typography */
  hourLabelSx?: SxProps<Theme>;
  /** Custom styles for minute number typography */
  minNumberSx?: SxProps<Theme>;
  /** Custom styles for minute label typography */
  minLabelSx?: SxProps<Theme>;
  /** Custom styles for second number typography */
  secNumberSx?: SxProps<Theme>;
  /** Custom styles for second label typography */
  secLabelSx?: SxProps<Theme>;
  /** Custom styles applied to all labels */
  labelSx?: SxProps<Theme>;
  /** Custom styles applied to all numbers */
  numberSx?: SxProps<Theme>;
  /** Custom styles for the root element */
  sx?: SxProps<Theme>;
}

/**
 * Props for the Countdown component
 */
export interface CountdownProps extends StylingSx {
  /** Target date for countdown */
  targetDate: Date;
  /** Custom separator between time units */
  separator?: string;
  /** Display variant of the countdown */
  variant?: 'block' | 'compact' | 'minimal';
  /** Layout direction of the countdown */
  direction?: 'vertical' | 'horizontal';
  /** Size preset or custom number for countdown */
  size?: 'small' | 'medium' | 'large' | number;
  /** Spacing between countdown elements */
  spacing?: number;
  /** Show only specific time unit */
  showOnly?: 'day' | 'hour' | 'min' | 'sec';
  /** Unique identifier for the countdown */
  identifier?: string;
  /** Custom element to show during countdown */
  countingElement?: ReactNode;
  /** Show remaining time in tooltip */
  useTooltip?: boolean;
  /** Callback function when countdown reaches zero */
  onOver?: () => void;
  /** Child elements */
  children?: ReactNode;
}

/**
 * Props for the CountdownRenderer component
 */
export interface CountdownRendererProps extends StylingSx {
  /** Display variant of the countdown */
  variant: NonNullable<CountdownProps['variant']>;
  /** Layout direction of the countdown */
  direction: NonNullable<CountdownProps['direction']>;
  /** Array of time segments with labels and values */
  segments: { label: string; value: number }[];
  /** Typography variant for numbers */
  numberVariant: TypographyVariant;
  /** Typography variant for labels */
  labelVariant: TypographyVariant;
  /** Separator between time units */
  separator: string;
  /** Spacing between countdown elements */
  spacing: number;
  /** Optional custom font size */
  customFontSize?: number;
}

/**
 * Interface representing remaining time units
 */
export interface TimeLeft {
  /** Days remaining */
  days: number;
  /** Hours remaining */
  hours: number;
  /** Minutes remaining */
  minutes: number;
  /** Seconds remaining */
  seconds: number;
}
