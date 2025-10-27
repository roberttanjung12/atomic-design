'use client';

import { useCountdown } from './Countdown.hooks';
import { renderCountdown } from './Countdown.renderers';
import type { CountdownProps } from './Countdown.types';
import { getSizeConfig, getSegments } from './Countdown.utils';

const Countdown = ({
  targetDate,
  separator = ':',
  variant = 'minimal',
  direction = 'vertical',
  showDays = true,
  size = 'medium',
  className,
  spacing = 1,
  showOnly,
  onOver
}: CountdownProps) => {
  const { timeLeft } = useCountdown(targetDate, onOver);

  const segments = getSegments(timeLeft, showDays, showOnly);

  const { numberVariant, labelVariant, customFontSize } = getSizeConfig(size);

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
