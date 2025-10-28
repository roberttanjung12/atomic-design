/**
 * SemanticColor represents a set of named color tokens intended for use with
 * timeline components. These tokens should map to the design system or theme
 * palette used by the application.
 *
 * @remarks
 * Typical values correspond to common semantic roles such as "primary",
 * "error", or "success". Implementations may map these to actual CSS color
 * values or theme palette entries.
 */

/**
 * Generic color option shared by timeline-related types.
 *
 * @property color - Optional semantic color token to apply to the element.
 * If omitted, the component's default color behavior will be used.
 */

/**
 * Options used to configure the timeline dot appearance.
 *
 * @extends Color
 *
 * @property outlined - When true, renders the dot with an outlined style
 * instead of a filled style.
 */

/**
 * Single timeline entry data model.
 *
 * @extends Color
 *
 * @property title - Primary content of the timeline entry. Required.
 * @property content - Optional secondary content or description for the entry.
 * @property opposite - Optional content displayed on the opposite side of the
 * timeline (commonly used for timestamps or metadata).
 * @property disabled - When true, the entry is rendered in a disabled/inactive
 * visual state and typically does not accept interaction.
 * @property dotIcon - Optional icon or node to render inside the timeline dot.
 * This may be a string identifier (icon name) or a ReactNode for custom markup.
 *
 * @remarks
 * The color property from Color can be used to style the entry (for example,
 * the dot and/or text) according to the application's semantic palette.
 */

/**
 * Props for the Timeline component.
 *
 * @property data - Array of TimelineData entries to render. Each entry
 * represents one step/item on the timeline.
 * @property position - Layout position of timeline content relative to the
 * timeline line. Possible values:
 *   - "left": all content rendered to the left
 *   - "right": all content rendered to the right
 *   - "alternate": content alternates sides per entry
 *   - "alternate-reverse": content alternates starting from the opposite side
 * If omitted, the component's default positioning will be used.
 * @property dot - Global dot configuration applied to timeline entries that
 * do not override dot options individually. Uses the OptionsDot shape.
 * @property connectorVariant - Visual style of the connector between timeline
 * items. Accepts "solid" or "dashed".
 *
 * @remarks
 * This shape is designed to be flexible: per-item settings in TimelineData
 * override these global props when provided.
 */

import type { ReactNode } from 'react';

type SemanticColor = 'primary' | 'inherit' | 'grey' | 'secondary' | 'error' | 'info' | 'success' | 'warning';

interface Color {
  color?: SemanticColor;
}

export interface OptionsDot extends Color {
  outlined?: boolean;
}

export interface TimelineData extends Color {
  title: string | ReactNode;
  content?: string | ReactNode;
  opposite?: string | ReactNode;
  disabled?: boolean;
  dotIcon?: string | ReactNode;
}

export interface TimelineProps {
  data: TimelineData[];
  position?: 'left' | 'right' | 'alternate' | 'alternate-reverse';
  dot?: OptionsDot;
  connectorVariant?: 'solid' | 'dashed';
}
