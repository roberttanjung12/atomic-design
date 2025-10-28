/**
 * Props for the FlipNumber component.
 *
 * @property value - The numeric or string value to display. Numeric values are formatted using the Indonesian locale ('id-ID') before rendering.
 * @property variant - Visual variant forwarded to each FlipDigit; controls the digit's visual style.
 * @property fontWeight - Optional CSS fontWeight applied to each digit. Defaults to 600 when omitted.
 * @property customFontSize - Optional custom font size (in pixels) forwarded to each FlipDigit to override default sizing.
 */

/**
 * FlipNumber component
 *
 * Renders a sequence of FlipDigit components, one for each character of the provided value.
 * If `value` is numeric, it is converted to a localized string via Number(value).toLocaleString('id-ID').
 * Non-numeric values are rendered as-is (split into characters).
 *
 * The component arranges digits horizontally using an inline-flex container and applies a small gap between them.
 * Provided styling and behavior props (variant, fontWeight, customFontSize) are forwarded to each FlipDigit.
 *
 * Note: This is intended as a client-side React component.
 *
 * @param props.value - The value to display (number | string).
 * @param props.variant - Variant prop passed to FlipDigit to control the digit style.
 * @param props.fontWeight - Optional font weight applied to rendered digits; defaults to 600.
 * @param props.customFontSize - Optional custom font size (pixels) forwarded to FlipDigit.
 *
 * @returns A JSX element containing the rendered flip-style digits.
 */

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
