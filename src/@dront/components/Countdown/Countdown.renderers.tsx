'use client';

import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import FlipNumber from './Component/FlipNumber';
import type { CountdownRendererProps } from './Countdown.types';

/**
 * All countdown variant renderers.
 */
export const renderCountdown = ({
  variant,
  direction,
  segments,
  numberVariant,
  labelVariant,
  separator,
  resolvedSpacing,
  className
}: CountdownRendererProps) => {
  const pad = (v: number) => String(v).padStart(2, '0');

  switch (variant) {
    case 'compact':
      return (
        <Typography
          variant={numberVariant}
          fontWeight={600}
          className={className}
          sx={{ display: 'flex', gap: resolvedSpacing }}
        >
          {segments.map((s, i) => (
            <Box key={i} component="span">
              <FlipNumber value={pad(s.value)} variant={numberVariant} fontWeight="bold" />
              {s.label[0]}
            </Box>
          ))}
        </Typography>
      );

    case 'minimal':
      return (
        <Typography
          variant={numberVariant}
          fontWeight={600}
          className={className}
          sx={{ display: 'flex', alignItems: 'center', gap: resolvedSpacing }}
        >
          {segments.map((s, i) => (
            <React.Fragment key={i}>
              <Box component="span">
                <FlipNumber value={pad(s.value)} variant={numberVariant} fontWeight="bold" />
              </Box>
              {i < segments.length - 1 && (
                <Box component="span" sx={{ mx: 0.3 }}>
                  {separator}
                </Box>
              )}
            </React.Fragment>
          ))}
        </Typography>
      );

    case 'block':
    default:
      return (
        <Stack direction="row" spacing={resolvedSpacing} alignItems="center" className={className}>
          {segments.map((s, i) => (
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
              <Typography variant={numberVariant} fontWeight="bold">
                <FlipNumber value={pad(s.value)} variant={numberVariant} fontWeight="bold" />
              </Typography>
              <Typography
                variant={labelVariant}
                color="text.secondary"
                sx={{
                  ml: direction === 'horizontal' ? 0.3 : 0,
                  mb: direction === 'horizontal' ? '2px' : 0
                }}
              >
                {s.label}
              </Typography>
            </Stack>
          ))}
        </Stack>
      );
  }
};
