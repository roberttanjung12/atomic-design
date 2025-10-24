'use client';

import type { TypographyVariant } from '@mui/material';
import { useCountdown } from './Countdown.hooks';
import { renderCountdown } from './Countdown.renderers';
import type { CountdownProps } from './Countdown.types';

const Countdown = ({
  targetDate,
  separator = ':',
  variant = 'minimal',
  direction = 'vertical',
  showDays = true,
  size = 'medium',
  className,
  spacing
}: CountdownProps) => {
  const { timeLeft } = useCountdown(targetDate);
  const { days, hours, minutes, seconds } = timeLeft;

  const totalHours = hours + days * 24;
  const displayHours = showDays ? hours : totalHours;

  const segments = [
    ...(showDays ? [{ label: 'days', value: days }] : []),
    { label: 'hours', value: displayHours },
    { label: 'min', value: minutes },
    { label: 'sec', value: seconds }
  ];

  const sizeConfig: Record<
    'small' | 'medium' | 'large',
    { numberVariant: TypographyVariant; labelVariant: TypographyVariant; spacing: number }
  > = {
    small: { numberVariant: 'h6', labelVariant: 'caption', spacing: 1.5 },
    medium: { numberVariant: 'h4', labelVariant: 'body2', spacing: 2.5 },
    large: { numberVariant: 'h3', labelVariant: 'body1', spacing: 4 }
  };

  const { numberVariant, labelVariant, spacing: defaultSpacing } = sizeConfig[size];

  const resolvedSpacing = spacing ?? (variant === 'block' ? defaultSpacing : 0);

  return renderCountdown({
    variant,
    direction,
    segments,
    numberVariant,
    labelVariant,
    separator,
    resolvedSpacing,
    className
  });
};

export default Countdown;
