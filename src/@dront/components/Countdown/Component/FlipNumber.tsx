'use client';

import React, { type ReactNode } from 'react';
import { Box } from '@mui/material';
import FlipDigit from './FlipDigit';

interface FlipNumberProps {
  value: number | string;
  variant: React.ComponentProps<typeof FlipDigit>['variant'];
  fontWeight?: React.CSSProperties['fontWeight'];
  customFontSize?: number;
}

/**
 * A component that displays a number with flipping animation effect.
 * Each digit is rendered separately and can be styled individually.
 *
 * @param {FlipNumberProps} props - The component props
 * @param {string | number} props.value - The numerical value to display
 * @param {string} props.variant - The variant style to apply to the digits
 * @param {number} [props.fontWeight=600] - The font weight of the digits (default: 600)
 * @param {string | number} [props.customFontSize] - Optional custom font size for the digits
 *
 * @returns {JSX.Element} A Box component containing individual FlipDigit components
 *
 * @example
 * <FlipNumber
 *   value={1234}
 *   variant="primary"
 *   fontWeight={500}
 *   customFontSize="2rem"
 * />
 */
const FlipNumber = ({ value, variant, fontWeight = 600, customFontSize }: FlipNumberProps): Readonly<ReactNode> => {
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
