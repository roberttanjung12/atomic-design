/**
 * Style customization interface for countdown component
 */
import type { ReactNode } from 'react';
import type { SxProps, Theme, TooltipProps, TypographyVariant } from '@mui/material';

/**
 * Provides style customization options for each countdown segment.
 * Each property allows passing MUI `SxProps<Theme>` to style specific parts
 * such as numbers, labels, and the root container.
 */
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
 * Props for the Countdown component.
 *
 * Controls the behavior, layout, and style of the countdown timer.
 */
export interface CountdownProps extends StylingSx {
  /** Target date for countdown */
  targetDate: Date;
  /** Custom separator between time units (e.g., ":" or "•") */
  separator?: string;
  /** Display variant of the countdown */
  variant?: 'block' | 'compact' | 'minimal';
  /** Layout direction of the countdown */
  direction?: 'vertical' | 'horizontal';
  /** Size preset or custom number for countdown */
  size?: 'small' | 'medium' | 'large' | number;
  /** Spacing between countdown elements */
  spacing?: number;
  /** Show only a specific time unit (day, hour, minute, or second) */
  showOnly?: 'day' | 'hour' | 'min' | 'sec';
  /** Unique identifier for the countdown instance */
  identifier?: string;
  /** Custom element to render while countdown is active */
  countingElement?: ReactNode;
  /**
   * Tooltip configuration.
   * - Pass `true` or `false` to enable or disable tooltip quickly.
   * - Pass an object to customize placement.
   *
   * @example
   * <Countdown targetDate={date} variant="compact" tooltip />
   * <Countdown targetDate={date} variant="compact" tooltip={false} />
   * <Countdown targetDate={date} variant="compact" tooltip={{ placement: 'top' }} />
   */
  tooltip?: boolean | { placement?: TooltipProps['placement'] };
  /** Callback function triggered when countdown reaches zero */
  onOver?: () => void;
  /** Child elements rendered when countdown has finished */
  children?: ReactNode;
}

/**
 * Props for the internal CountdownRenderer component.
 *
 * Used by the main countdown to render time segments, typography, and layout.
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
  /** Optional custom font size for number text */
  customFontSize?: number;
}

/**
 * Represents the remaining time units calculated for the countdown.
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
