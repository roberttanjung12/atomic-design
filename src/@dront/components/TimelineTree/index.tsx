'use client';

import {
  Timeline as MuiTimeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator
} from '@mui/lab';
import { Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { getStyleDivider } from './Timeline.helper';
import type { TimelineProps } from './Timeline.types';

const DashedConnector = styled(TimelineConnector)(({ theme }) => ({
  ...getStyleDivider(theme.palette.divider)
}));

/**
 * TimelineTree
 *
 * Client-side React component that renders a vertical timeline using MUI Lab's Timeline primitives.
 * Each entry in the provided `data` array is rendered as a TimelineItem with an optional opposite content,
 * dot (with optional icon and color), connector (solid or dashed), and main content/title area.
 *
 * Visual behaviors:
 * - Items marked as `disabled` are rendered with reduced opacity and muted border/colour where applicable.
 * - The dashed connector is a styled version of MUI's TimelineConnector that uses the current theme's divider color.
 * - Dot appearance can be controlled via the `dot` prop (outlined vs filled and default color).
 *
 * Notes:
 * - This component is implemented as a client component (contains 'use client').
 * - Keys for list items are generated from the iteration index (be cautious if reordering/removing items dynamically).
 * - The component composes MUI components: Timeline, TimelineItem, TimelineOppositeContent, TimelineSeparator,
 *   TimelineDot, TimelineConnector (or styled dashed connector), TimelineContent, Stack, Typography.
 *
 * @param props - Component props
 * @param props.data - Array of timeline entries. Each entry should at minimum supply a `title`. Common entry fields:
 *   - title: React.ReactNode | string — primary label shown in the content region.
 *   - content?: React.ReactNode — optional additional content rendered beneath the title.
 *   - opposite?: React.ReactNode — optional content rendered in the opposite column (when position is not 'alternate').
 *   - disabled?: boolean — when true, the item is visually muted (reduced opacity and subdued border/color).
 *   - color?: string — optional color applied to the TimelineDot for this item (falls back to `dot.color`).
 *   - dotIcon?: React.ReactNode — optional icon rendered inside the TimelineDot.
 * @param props.position - Timeline position for items (default: 'right'). Passed to MUI Timeline and TimelineItem.
 * @param props.dot - Controls default dot appearance for items:
 *   - color?: string — default color used when an item does not supply its own `color`.
 *   - outlined?: boolean — when true, dots use an outlined variant; otherwise filled (default behavior).
 * @param props.connectorVariant - Determines connector style between items. Accepts 'solid' (default) or 'dashed'.
 *
 * @returns JSX.Element — Rendered Timeline component composed of provided data.
 *
 * @example
 * <TimelineTree
 *   position="right"
 *   connectorVariant="dashed"
 *   dot={{ color: 'primary', outlined: false }}
 *   data={[
 *     { title: 'Step 1', content: 'Start', dotIcon: <StartIcon /> },
 *     { title: 'Step 2', opposite: '2:00 PM', disabled: true },
 *   ]}
 * />
 */
const TimelineTree = ({ data, position = 'right', dot, connectorVariant = 'solid' }: TimelineProps) => {
  return (
    <MuiTimeline position={position}>
      {data.map((tl, key) => {
        const isDisabled = tl.disabled;

        return (
          <TimelineItem key={key} position={position}>
            {tl.opposite && (
              <TimelineOppositeContent sx={{ opacity: isDisabled ? 0.5 : 1 }}>{tl.opposite}</TimelineOppositeContent>
            )}

            <TimelineSeparator>
              <TimelineDot
                color={isDisabled ? 'grey' : (tl?.color ?? dot?.color)}
                variant={dot?.outlined ? 'outlined' : 'filled'}
                sx={{
                  opacity: isDisabled ? 0.5 : 1,
                  borderColor: isDisabled ? 'grey.400' : undefined
                }}
              >
                {tl.dotIcon ? tl.dotIcon : null}
              </TimelineDot>
              {connectorVariant === 'dashed' ? <DashedConnector /> : <TimelineConnector />}
            </TimelineSeparator>

            <TimelineContent sx={{ opacity: isDisabled ? 0.5 : 1 }}>
              <Stack direction="column">
                <Typography>{tl.title}</Typography>

                {tl.content && tl.content}
              </Stack>
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </MuiTimeline>
  );
};

export default TimelineTree;
