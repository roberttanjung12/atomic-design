import { type SxProps, type Theme } from '@mui/material';

export const mergeSx = (...styles: (SxProps<Theme> | undefined)[]): SxProps<Theme> =>
  styles.filter(Boolean).flat() as SxProps<Theme>;

export const getSxByLabel = (
  label: string,
  map: Record<string, SxProps<Theme> | undefined>
): SxProps<Theme> | undefined => {
  const key = label.toLowerCase();

  if (key.startsWith('day')) return map.day;
  if (key.startsWith('hour')) return map.hour;
  if (key.startsWith('min')) return map.min;
  if (key.startsWith('sec')) return map.sec;

  return undefined;
};
