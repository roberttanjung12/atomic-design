'use client';

import React from 'react';
import { Box } from '@mui/material';
import FlipDigit from './FlipDigit';

interface FlipNumberProps {
  value: number | string;
  variant: React.ComponentProps<typeof FlipDigit>['variant'];
  fontWeight?: React.CSSProperties['fontWeight'];
  customFontSize?: number; // <— tambahan
}

const FlipNumber = ({ value, variant, fontWeight = 600, customFontSize }: FlipNumberProps) => {
  let displayValue = String(value);

  if (!isNaN(Number(value))) {
    displayValue = Number(value).toLocaleString('id-ID');
  }
  const strValue = displayValue.split('');

  return (
    <Box component="span" sx={{ display: 'inline-flex', gap: '1px' }}>
      {strValue.map((digit, i) => (
        <FlipDigit key={i} digit={digit} variant={variant} fontWeight={fontWeight} customFontSize={customFontSize} />
      ))}
    </Box>
  );
};

export default FlipNumber;
