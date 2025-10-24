'use client';

import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';

interface FlipDigitProps {
  digit: string;
  variant: React.ComponentProps<typeof Typography>['variant'];
  fontWeight?: React.CSSProperties['fontWeight'];
  duration?: number;
}

const FlipDigit: React.FC<FlipDigitProps> = ({ digit, variant, fontWeight = 600, duration = 300 }) => {
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
            backfaceVisibility: 'hidden'
          }}
        >
          {prevDigit}
        </Typography>
      </Box>
    </Box>
  );
};

export default FlipDigit;
