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
  spacing = 1,
  onOver
}: CountdownProps) => {
  const { timeLeft } = useCountdown(targetDate, onOver);
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
    { numberVariant: TypographyVariant; labelVariant: TypographyVariant }
  > = {
    small: { numberVariant: 'h6', labelVariant: 'caption' },
    medium: { numberVariant: 'h4', labelVariant: 'body2' },
    large: { numberVariant: 'h3', labelVariant: 'body1' }
  };

  let numberVariant: TypographyVariant;
  let labelVariant: TypographyVariant;
  let customFontSize: number | undefined;

  if (typeof size === 'number') {
    numberVariant = 'body1';
    labelVariant = 'caption';
    customFontSize = size;
  } else {
    const config = sizeConfig[size];

    numberVariant = config.numberVariant;
    labelVariant = config.labelVariant;
  }

  return renderCountdown({
    variant,
    direction,
    segments,
    numberVariant,
    labelVariant,
    separator,
    spacing,
    className,
    ...(customFontSize ? { customFontSize } : {})
  });
};

export default Countdown;
