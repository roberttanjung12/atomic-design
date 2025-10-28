'use client';

import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';

interface FlipDigitProps {
  digit: string;
  variant: React.ComponentProps<typeof Typography>['variant'];
  fontWeight?: React.CSSProperties['fontWeight'];
  duration?: number;
  customFontSize?: number;
}

/**
 * A component that displays a single digit with a flip animation when the digit changes.
 *
 * @component
 * @param {Object} props - The component props
 * @param {number} props.digit - The current digit to display
 * @param {TypographyVariant} props.variant - The MUI Typography variant to use
 * @param {number} [props.fontWeight=600] - The font weight of the digit
 * @param {number} [props.duration=300] - The duration of the flip animation in milliseconds
 * @param {string|number} [props.customFontSize] - Optional custom font size for the digit
 *
 * @returns {JSX.Element} A Box component containing an animated digit
 *
 * @example
 * <FlipDigit
 *   digit={5}
 *   variant="h1"
 *   fontWeight={700}
 *   duration={500}
 *   customFontSize="2rem"
 * />
 */
const FlipDigit = ({ digit, variant, fontWeight = 600, duration = 300, customFontSize }: FlipDigitProps) => {
  const [prevDigit, setPrevDigit] = useState(digit);
  const [flipping, setFlipping] = useState(false);

  useEffect(() => {
    if (digit !== prevDigit) {
      setFlipping(true);
      const timeout = setTimeout(() => {
        setPrevDigit(digit);
        setFlipping(false);
      }, duration);

      return () => clearTimeout(timeout);
    }
  }, [digit, prevDigit, duration]);

  return (
    <Box
      sx={{
        display: 'inline-block',
        perspective: '600px'
      }}
    >
      <Box
        sx={{
          display: 'inline-block',
          transformStyle: 'preserve-3d',
          transition: `transform ${duration}ms ease-in-out`,
          transform: flipping ? 'rotateX(90deg)' : 'rotateX(0deg)'
        }}
      >
        <Typography
          variant={variant}
          fontWeight={fontWeight}
          sx={{
            display: 'inline-block',
            backfaceVisibility: 'hidden',
            ...(customFontSize && { fontSize: customFontSize })
          }}
        >
          {prevDigit}
        </Typography>
      </Box>
    </Box>
  );
};

export default FlipDigit;
