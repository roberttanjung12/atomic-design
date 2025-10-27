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
  spacing = 1,
  showOnly,
  onOver,

  sx,
  numberSx,
  labelSx,
  dayNumberSx,
  dayLabelSx,
  hourNumberSx,
  hourLabelSx,
  minNumberSx,
  minLabelSx,
  secNumberSx,
  secLabelSx
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
    customFontSize,

    sx,
    numberSx,
    labelSx,
    dayNumberSx,
    dayLabelSx,
    hourNumberSx,
    hourLabelSx,
    minNumberSx,
    minLabelSx,
    secNumberSx,
    secLabelSx
  });
};

export default Countdown;
