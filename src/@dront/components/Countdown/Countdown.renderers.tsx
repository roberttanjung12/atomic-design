'use client';

import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import FlipNumber from './Component/FlipNumber';
import { getSxByLabel, mergeSx } from './Countdown.helpers';
import type { CountdownRendererProps } from './Countdown.types';

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

    /** 🟡 MINIMAL */
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
