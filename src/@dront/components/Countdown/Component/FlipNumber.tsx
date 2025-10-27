'use client';

import React from 'react';
import { Box } from '@mui/material';
import FlipDigit from './FlipDigit';

interface FlipNumberProps {
  value: number | string;
  variant: React.ComponentProps<typeof FlipDigit>['variant'];
  fontWeight?: React.CSSProperties['fontWeight'];
  customFontSize?: number;
}

const FlipNumber: React.FC<FlipNumberProps> = ({ value, variant, fontWeight = 600, customFontSize }) => {
  const strValue = String(value).padStart(2, '0').split('');

  return (
    <Box component="span" sx={{ display: 'inline-flex', gap: '1px' }}>
      {strValue.map((digit, i) => (
        <FlipDigit key={i} digit={digit} variant={variant} fontWeight={fontWeight} customFontSize={customFontSize} />
      ))}
    </Box>
  );
};

export default FlipNumber;
