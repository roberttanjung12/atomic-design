'use client';

import type { ReactNode } from 'react';
import Stack from '@mui/material/Stack';

/**
 * A wrapper component that renders its children inside a Material-UI `Stack` component.
 * It provides a consistent gap between child elements using the `gap` and `useFlexGap` properties.
 *
 * @param {ParagraphWrapperProps} props - The props for the ParagraphWrapper component.
 * @param {ReactNode} props.children - The child elements to be rendered inside the wrapper.
 * @returns {JSX.Element} The rendered `Stack` component containing the children.
 */
interface ParagraphWrapperProps {
  children: ReactNode;
}

/**
 * ParagraphWrapper component.
 *
 * @param {ParagraphWrapperProps} props - The props for the component.
 */
const ParagraphWrapper = ({ children }: ParagraphWrapperProps) => {
  return (
    <Stack gap={1} useFlexGap>
      {children}
    </Stack>
  );
};

export default ParagraphWrapper;
