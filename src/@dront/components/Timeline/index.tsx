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
import { styled } from '@mui/material/styles';
import { getStyleDivider } from './Timeline.helper';
import type { TimelineProps } from './Timeline.types';

const DashedConnector = styled(TimelineConnector)(({ theme }) => ({
  ...getStyleDivider(theme.palette.divider)
}));

const Timeline = ({ data, position = 'right', dot, connectorVariant = 'solid' }: TimelineProps) => {
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

            <TimelineContent sx={{ opacity: isDisabled ? 0.5 : 1 }}>{tl.content}</TimelineContent>
          </TimelineItem>
        );
      })}
    </MuiTimeline>
  );
};

export default Timeline;
