/**
 * Helper functions for countdown component styling
 */

/**
 * Merges multiple MUI SX style objects into a single SX style object
 * @param styles - Array of MUI SX style objects or undefined values to merge
 * @returns Merged MUI SX style object
 */

/**
 * Gets the corresponding style object for a time unit label
 * @param label - Time unit label (e.g. "days", "hours", "minutes", "seconds")
 * @param map - Record mapping time unit keys to their style objects
 * @returns Corresponding MUI SX style object for the label, or undefined if no match
 */

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
