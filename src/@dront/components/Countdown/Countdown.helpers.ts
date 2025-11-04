import { type SxProps, type Theme } from '@mui/material';

/**
 * Merges multiple `SxProps<Theme>` styles into a single style object.
 *
 * @param styles - An array of style objects or undefined values to merge
 * @returns A flattened array of style objects as a single `SxProps<Theme>`
 *
 * @example
 * ```tsx
 * const combinedStyles = mergeSx(
 *   { color: 'primary.main' },
 *   undefined,
 *   { padding: 2 }
 * );
 * ```
 */
export const mergeSx = (...styles: (SxProps<Theme> | undefined)[]): SxProps<Theme> =>
  styles.filter(Boolean).flat() as SxProps<Theme>;

/**
 * Returns a style (SxProps<Theme>) from a provided map based on the prefix of a label.
 *
 * The function performs a case-insensitive check of the label's start and selects the
 * corresponding entry from the provided map. It recognizes the following prefixes:
 * - "day"  -> map.day
 * - "hour" -> map.hour
 * - "min"  -> map.min
 * - "sec"  -> map.sec
 *
 * If the label does not start with any of these prefixes, the function returns `undefined`.
 *
 * @remarks
 * - Matching is done using `label.toLowerCase().startsWith(...)`, so values like
 *   "Days", "day-1", "HOUR", "minutes" (matches "min") will be handled appropriately.
 * - The `map` is expected to include keys for `day`, `hour`, `min`, and `sec`, each
 *   mapping to an `SxProps<Theme>` or `undefined`.
 *
 * @param label - The textual label to examine (e.g., "Days", "hours", "minutes", "seconds").
 * @param map - A record mapping the unit keys (`day`, `hour`, `min`, `sec`) to style objects.
 * @returns The matching `SxProps<Theme>` from the map for the detected unit prefix, or `undefined`
 *          if no matching prefix is found.
 *
 * @example
 * // Given map: { day: daySx, hour: hourSx, min: minSx, sec: secSx }
 * // getSxByLabel("Days", map)  // returns daySx
 * // getSxByLabel("minutes", map) // returns minSx
 */
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
