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

export const getSegments = (timeLeft: TimeLeft, showDays: boolean, showOnly?: 'day' | 'hour' | 'min' | 'sec') => {
  const { days, hours, minutes, seconds } = timeLeft;

  if (showOnly) {
    const totalSeconds = seconds + minutes * 60 + hours * 3600 + days * 86400;
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalSeconds / 3600);
    const totalDays = Math.floor(totalSeconds / 86400);

    const labelMap: Record<typeof showOnly, string> = {
      day: 'days',
      hour: 'hours',
      min: 'min',
      sec: 'sec'
    };

    const valueMap: Record<typeof showOnly, number> = {
      day: totalDays,
      hour: totalHours,
      min: totalMinutes,
      sec: totalSeconds
    };

    return [
      {
        label: labelMap[showOnly],
        value: valueMap[showOnly]
      }
    ];
  }

  const totalHours = hours + days * 24;
  const displayHours = showDays ? hours : totalHours;

  return [
    ...(showDays ? [{ label: 'days', value: days }] : []),
    { label: 'hours', value: displayHours },
    { label: 'min', value: minutes },
    { label: 'sec', value: seconds }
  ];
};
