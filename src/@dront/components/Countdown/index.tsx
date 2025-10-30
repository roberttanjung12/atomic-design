'use client';

import type { ReactNode } from 'react';
import { Tooltip } from '@mui/material';
import { useCountdown } from './Countdown.hooks';
import { renderCountdown } from './Countdown.renderers';
import type { CountdownProps } from './Countdown.types';
import { getSizeConfig, getSegments } from './Countdown.utils';

/**
 * Countdown
 *
 * Renders a configurable countdown UI targeting a specific date/time. Internally it
 * uses a countdown hook to compute remaining time and derives renderable segments and
 * sizing configuration. The component can either render a composed countdown layout
 * (via renderCountdown) or short-circuit to user-provided nodes depending on state:
 *
 * - If the target time is reached (finished) and children is provided, children is returned.
 * - If the countdown is still running and countingElement is provided, countingElement is returned.
 * - Otherwise the default countdown UI is rendered with the provided styling and layout props.
 *
 * Remarks:
 * - The component determines "finished" when all time segments (days, hours, minutes, seconds) are zero.
 * - onOver is invoked by the internal hook when the countdown completes.
 * - Styling props suffixed with Sx are passed through to the corresponding element renderers to allow custom styles.
 * - The returned node is treated as readonly (immutable) to encourage safe rendering patterns.
 *
 * @returns {React.JSX} Readonly<ReactNode>
 */
const Countdown = ({
  targetDate,
  separator = ':',
  variant: variantProp = 'minimal',
  direction = 'vertical',
  size = 'medium',
  spacing = 1,
  showOnly,
  identifier,
  tooltip,
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
}: CountdownProps): Readonly<ReactNode> => {
  const { timeLeft } = useCountdown(targetDate, onOver);

  const finished = timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0;

  const segments = getSegments(timeLeft, showOnly, identifier);
  const { numberVariant, labelVariant, customFontSize } = getSizeConfig(size);
  const variant = variantProp === 'minimal' && showOnly ? 'compact' : variantProp;

  const tooltipActive = tooltip === true || (typeof tooltip === 'object' && tooltip !== null);
  const tooltipPlacement = typeof tooltip === 'object' && tooltip.placement ? tooltip.placement : 'top';
  const tooltipText = finished ? 'Countdown finished' : `Finish at ${targetDate.toLocaleString('id-ID')}`;

  let content: ReactNode;

  if (finished && children) {
    content = children;
  } else if (!finished && countingElement) {
    content = countingElement;
  } else {
    content = renderCountdown({
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
  }

  return tooltipActive ? (
    <Tooltip title={tooltipText} arrow placement={tooltipPlacement}>
      <span style={{ display: 'inline-flex', alignItems: 'center', width: 'fit-content' }}>{content}</span>
    </Tooltip>
  ) : (
    content
  );
};

export default Countdown;
