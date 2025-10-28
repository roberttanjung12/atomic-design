/**
 * A customizable countdown component that displays time remaining until a target date.
 *
 * @component
 * @param {Object} props - Component props
 * @param {Date | number} props.targetDate - The target date/time to count down to
 * @param {string} [props.separator=':'] - Separator character between time segments
 * @param {'minimal' | 'standard'} [props.variant='minimal'] - Visual variant of the countdown
 * @param {'vertical' | 'horizontal'} [props.direction='vertical'] - Layout direction
 * @param {boolean} [props.showDays=true] - Whether to show days segment
 * @param {'small' | 'medium' | 'large'} [props.size='medium'] - Size variant
 * @param {number} [props.spacing=1] - Spacing between segments
 * @param {('days' | 'hours' | 'minutes' | 'seconds')[]} [props.showOnly] - Array of segments to show
 * @param {string} [props.identifier] - Custom identifier for segments
 * @param {React.ReactNode} [props.countingElement] - Element to show while counting
 * @param {() => void} [props.onOver] - Callback fired when countdown ends
 * @param {SxProps} [props.sx] - Custom styles for container
 * @param {SxProps} [props.numberSx] - Custom styles for all numbers
 * @param {SxProps} [props.labelSx] - Custom styles for all labels
 * @param {SxProps} [props.dayNumberSx] - Custom styles for day number
 * @param {SxProps} [props.dayLabelSx] - Custom styles for day label
 * @param {SxProps} [props.hourNumberSx] - Custom styles for hour number
 * @param {SxProps} [props.hourLabelSx] - Custom styles for hour label
 * @param {SxProps} [props.minNumberSx] - Custom styles for minute number
 * @param {SxProps} [props.minLabelSx] - Custom styles for minute label
 * @param {SxProps} [props.secNumberSx] - Custom styles for second number
 * @param {SxProps} [props.secLabelSx] - Custom styles for second label
 * @param {React.ReactNode} [props.children] - Content to show when countdown ends
 *
 * @returns {React.ReactElement} The countdown component
 */

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
