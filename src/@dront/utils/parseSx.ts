import { type SxProps, type Theme } from '@mui/material/styles';
import type { SystemStyleObject } from '@mui/system';

/**
 * Normalizes the `sx` prop into an array form to ensure consistent usage.
 *
 * MUI's `sx` prop can be provided as a single object, function, or an array of such values.
 * This helper wraps non-array `sx` values into an array so that they can be safely spread.
 *
 * @param {SxProps<Theme> | undefined} sx - The style configuration(s) for a component.
 * Can be a single style object, a function returning styles, or an array of such values.
 *
 * @returns {SystemStyleObject[]} Always returns an array of `sx` props for consistent iteration or spreading.
 *
 * @example
 * ```tsx
 * const MyBox = ({ children, sx }: { children: React.ReactNode; sx?: SxProps<Theme> }) => {
 *   return <Box sx={[{ fontWeight: 'bold' }, ...parseSx(sx)]}>{children}</Box>;
 * };
 *
 * export default MyBox;
 * ```
 */
const parseSx = (sx?: SxProps<Theme>): SystemStyleObject[] => (Array.isArray(sx) ? sx : [sx]);

export default parseSx;
