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
  identifier,
  countingElement,
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
  secLabelSx,

  children
}: CountdownProps) => {
  const { timeLeft } = useCountdown(targetDate, onOver);

  const finished = timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0;

  const segments = getSegments(timeLeft, showDays, showOnly, identifier);

  const { numberVariant, labelVariant, customFontSize } = getSizeConfig(size);

  if (finished && children) {
    return children;
  }

  if (!finished && countingElement) {
    return countingElement;
  }

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
