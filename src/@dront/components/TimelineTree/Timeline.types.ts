import type { ReactNode } from 'react';

/**
 * Semantic color options used across the timeline component.
 */
export type SemanticColor = 'primary' | 'inherit' | 'grey' | 'secondary' | 'error' | 'info' | 'success' | 'warning';

/**
 * Base interface for color configuration.
 */
interface Color {
  /** Defines the semantic color variant. */
  color?: SemanticColor;
}

/**
 * Options for customizing the appearance of timeline dots.
 */
export interface OptionsDot extends Color {
  /** Whether the dot should have an outlined style. */
  outlined?: boolean;
}

/**
 * Represents an individual timeline item data.
 */
export interface TimelineData extends Color {
  /** The main title or label for the timeline item. */
  title: string | ReactNode;

  /** The main content or description for the timeline item. */
  content?: string | ReactNode;

  /** Content to display on the opposite side of the timeline. */
  opposite?: string | ReactNode;

  /** Whether the timeline item is disabled or inactive. */
  disabled?: boolean;

  /** Custom icon or element for the timeline dot. */
  dotIcon?: string | ReactNode;
}

/**
 * Props definition for the Timeline component.
 */
export interface TimelineProps {
  /** Array of timeline item data objects to be rendered. */
  data: TimelineData[];

  /**
   * Defines the alignment or layout position of the timeline.
   *
   * - `'left'` – all items align on the left.
   * - `'right'` – all items align on the right.
   * - `'alternate'` – items alternate between left and right.
   * - `'alternate-reverse'` – same as alternate, but reversed order.
   */
  position?: 'left' | 'right' | 'alternate' | 'alternate-reverse';

  /** Configuration options for the timeline dot appearance. */
  dot?: OptionsDot;

  /** Style variant for the connector line between timeline items. */
  connectorVariant?: 'solid' | 'dashed';
}
