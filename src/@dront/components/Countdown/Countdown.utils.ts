import type { TypographyVariant } from '@mui/material';
import type { TimeLeft } from './Countdown.types';

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

export const getSegments = (
  timeLeft: TimeLeft,
  showDays: boolean,
  showOnly?: 'day' | 'hour' | 'min' | 'sec',
  identifier?: string
) => {
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

  if (showDays) segments.push({ label: 'Days', value: timeLeft.days });

  segments.push(
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  );

  return segments;
};
