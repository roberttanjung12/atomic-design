/**
 * Props for the Skeleton component.
 */
export interface SkeletonProps {
  /**
   * Defines the shape of the skeleton placeholder.
   * @default 'rounded'
   */
  variant?: 'square' | 'rounded' | 'circular' | 'text';
  /**
   * Width of the skeleton.
   * Can be a number (pixels) or string (e.g. '100%', '10rem').
   */
  width?: number | string;
  /**
   * Height of the skeleton.
   * Ignored if `variant="text"`.
   */
  height?: number | string;
  /**
   * Number of lines when variant="text".
   * @default 1
   */
  lines?: number;
}
