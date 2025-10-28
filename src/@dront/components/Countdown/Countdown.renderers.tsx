'use client';

import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import FlipNumber from './Component/FlipNumber';
import { getSxByLabel, mergeSx } from './Countdown.helpers';
import type { CountdownRendererProps } from './Countdown.types';

/**
 * Renders a countdown UI based on the provided rendering props.
 *
 * The renderer supports three visual variants:
 * - "compact": renders each segment as a condensed inline value with a single-letter label.
 * - "minimal": renders numeric segments separated by a custom separator (no labels).
 * - "block" (default): renders each segment as a stacked number + label block; layout can be horizontal or vertical.
 *
 * Common behaviors:
 * - Numeric values are zero-padded to 2 digits (e.g. 4 -> "04").
 * - Per-segment style overrides are supported via label-specific sx props (day/hour/min/sec).
 * - Merges global styles with per-segment styles using mergeSx and resolves per-label overrides via getSxByLabel.
 *
 * Return value:
 * @returns A JSX element representing the countdown, ready to be rendered in a React tree.
 *
 * Example:
 * const jsx = renderCountdown({
 *   variant: 'block',
 *   direction: 'horizontal',
 *   segments: [{ label: 'days', value: 3 }, { label: 'hours', value: 5 }],
 *   numberVariant: 'h4',
 *   labelVariant: 'caption',
 *   spacing: 1
 * });
 */
export const renderCountdown = ({
  variant,
  direction,
  segments,
  numberVariant,
  labelVariant,
  separator,
  spacing,
  customFontSize,

  sx,
  numberSx,
  labelSx,
  dayNumberSx,
  dayLabelSx,
  hourNumberSx,
  hourLabelSx,
  minNumberSx,
  minLabelSx,
  secNumberSx,
  secLabelSx
}: CountdownRendererProps) => {
  const pad = (v: number) => String(v).padStart(2, '0');

  const numberStyleMap = {
    day: dayNumberSx,
    hour: hourNumberSx,
    min: minNumberSx,
    sec: secNumberSx
  };

  const labelStyleMap = {
    day: dayLabelSx,
    hour: hourLabelSx,
    min: minLabelSx,
    sec: secLabelSx
  };

  switch (variant) {
    case 'compact':
      return (
        <Typography
          variant={numberVariant}
          fontWeight={600}
          sx={mergeSx(
            {
              display: 'flex',
              gap: spacing,
              ...(customFontSize && { fontSize: customFontSize })
            },
            sx
          )}
        >
          {segments.map((s, i) => {
            const numSx = mergeSx(numberSx, getSxByLabel(s.label, numberStyleMap));
            const lblSx = mergeSx(labelSx, getSxByLabel(s.label, labelStyleMap));

            return (
              <Box key={i} component="span" sx={{ display: 'inline-flex', alignItems: 'flex-end', gap: 0.3 }}>
                <Box sx={numSx}>
                  <FlipNumber
                    value={pad(s.value)}
                    variant={numberVariant}
                    fontWeight="bold"
                    customFontSize={customFontSize}
                  />
                </Box>
                <Typography component="span" variant={labelVariant} sx={lblSx}>
                  {s.label[0]}
                </Typography>
              </Box>
            );
          })}
        </Typography>
      );

    case 'minimal':
      return (
        <Typography
          component="span"
          variant={numberVariant}
          fontWeight={600}
          sx={mergeSx(
            {
              display: 'flex',
              alignItems: 'center',
              gap: spacing
            },
            sx
          )}
        >
          {segments.map((s, i) => {
            const numSx = mergeSx(numberSx, getSxByLabel(s.label, numberStyleMap));

            return (
              <React.Fragment key={i}>
                <Box component="span" sx={numSx}>
                  <FlipNumber
                    value={pad(s.value)}
                    variant={numberVariant}
                    fontWeight="bold"
                    customFontSize={customFontSize}
                  />
                </Box>
                {i < segments.length - 1 && <Box component="span">{separator}</Box>}
              </React.Fragment>
            );
          })}
        </Typography>
      );

    case 'block':
    default:
      return (
        <Stack direction="row" spacing={spacing} alignItems="center" sx={sx}>
          {segments.map((s, i) => {
            const numSx = mergeSx(numberSx, getSxByLabel(s.label, numberStyleMap));
            const lblSx = mergeSx(labelSx, getSxByLabel(s.label, labelStyleMap));

            return (
              <Stack
                key={i}
                direction={direction === 'vertical' ? 'column' : 'row'}
                alignItems={direction === 'vertical' ? 'center' : 'flex-end'}
                spacing={0.5}
                sx={{
                  lineHeight: 1,
                  ...(direction === 'horizontal' && {
                    '& .MuiTypography-root': {
                      display: 'inline-block'
                    }
                  })
                }}
              >
                <Typography variant={numberVariant} fontWeight="bold" sx={numSx}>
                  <FlipNumber
                    value={pad(s.value)}
                    variant={numberVariant}
                    fontWeight="bold"
                    customFontSize={customFontSize}
                  />
                </Typography>

                <Typography
                  variant={labelVariant}
                  color="text.secondary"
                  sx={mergeSx(
                    {
                      ml: direction === 'horizontal' ? 0.3 : 0,
                      mb: direction === 'horizontal' ? '2px' : 0
                    },
                    lblSx
                  )}
                >
                  {s.label}
                </Typography>
              </Stack>
            );
          })}
        </Stack>
      );
  }
};
