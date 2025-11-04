import type { TypographyVariant } from '@mui/material';
import type { TimeLeft } from './Countdown.types';

/**
 * Returns typography configuration based on the provided size parameter.
 *
 * @param size - Can be either a number for custom font size, or predefined sizes: 'small', 'medium', 'large'
 * @returns An object containing:
 *  - numberVariant: Typography variant for numbers
 *  - labelVariant: Typography variant for labels
 *  - customFontSize: Optional custom font size (only when size parameter is a number)
 *
 * @example
 * ```typescript
 * // Using predefined size
 * getSizeConfig('small') // returns { numberVariant: 'h6', labelVariant: 'caption' }
 *
 * // Using custom size
 * getSizeConfig(24) // returns { numberVariant: 'body1', labelVariant: 'caption', customFontSize: 24 }
 * ```
 */
export const getSizeConfig = (
  size: number | 'small' | 'medium' | 'large'
): {
  numberVariant: TypographyVariant;
  labelVariant: TypographyVariant;
  customFontSize?: number;
} => {
  const sizeConfig: Record<
    'small' | 'medium' | 'large',
    { numberVariant: TypographyVariant; labelVariant: TypographyVariant }
  > = {
    small: { numberVariant: 'h6', labelVariant: 'caption' },
    medium: { numberVariant: 'h4', labelVariant: 'body2' },
    large: { numberVariant: 'h3', labelVariant: 'body1' }
  };

  if (typeof size === 'number') {
    return {
      numberVariant: 'body1',
      labelVariant: 'caption',
      customFontSize: size
    };
  }

  return sizeConfig[size];
};

/**
 * Formats time segments for countdown display based on given parameters
 * @param timeLeft - Object containing days, hours, minutes, and seconds
 * @param showDays - Boolean flag to show/hide days segment
 * @param showOnly - Optional parameter to show only one specific time unit ('day', 'hour', 'min', 'sec')
 * @param identifier - Optional string parameter using format "d,h,m,s" to customize displayed segments
 * @returns Array of objects containing label and value for each time segment
 *
 * @example
 * // Returns all segments
 * getSegments({days: 1, hours: 2, minutes: 30, seconds: 45}, true)
 *
 * @example
 * // Returns only hours
 * getSegments({days: 1, hours: 2, minutes: 30, seconds: 45}, true, 'hour')
 *
 * @example
 * // Returns custom segments using identifier
 * getSegments({days: 1, hours: 2, minutes: 30, seconds: 45}, true, undefined, 'd,h')
 */
export const getSegments = (timeLeft: TimeLeft, showOnly?: 'day' | 'hour' | 'min' | 'sec', identifier?: string) => {
  const segments = [];

  const totalSeconds = timeLeft.days * 86400 + timeLeft.hours * 3600 + timeLeft.minutes * 60 + timeLeft.seconds;

  if (identifier) {
    const parts = identifier.split(',').map(f => f.trim().toLowerCase());
    const hasDay = parts.includes('d');

    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalSeconds / 3600);

    let remaining = totalSeconds;

    const d = Math.floor(remaining / 86400);

    remaining -= d * 86400;

    const h = Math.floor(remaining / 3600);

    remaining -= h * 3600;

    const m = Math.floor(remaining / 60);

    remaining -= m * 60;

    const s = remaining;

    for (const part of parts) {
      switch (part) {
        case 'd':
          segments.push({ label: 'Days', value: d });
          break;
        case 'h':
          segments.push({
            label: 'Hours',
            value: hasDay ? h : totalHours
          });
          break;
        case 'm':
          if (hasDay || parts.includes('h')) {
            segments.push({ label: 'Minutes', value: m });
          } else {
            segments.push({ label: 'Minutes', value: totalMinutes });
          }
          break;
        case 's':
          if (hasDay || parts.includes('h') || parts.includes('m')) {
            segments.push({ label: 'Seconds', value: s });
          } else {
            segments.push({ label: 'Seconds', value: totalSeconds });
          }
          break;
      }
    }

    return segments;
  }

  if (showOnly) {
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalSeconds / 3600);
    const totalDays = Math.floor(totalSeconds / 86400);

    switch (showOnly) {
      case 'day':
        return [{ label: 'Days', value: totalDays }];
      case 'hour':
        return [{ label: 'Hours', value: totalHours }];
      case 'min':
        return [{ label: 'Minutes', value: totalMinutes }];
      case 'sec':
        return [{ label: 'Seconds', value: totalSeconds }];
    }
  }

  segments.push(
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  );

  return segments;
};
