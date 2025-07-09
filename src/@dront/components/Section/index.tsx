import type { ReactNode } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/**
 * Props for the Section component.
 */
interface SectionProps {
  /**
   * The content to be rendered inside the section.
   */
  children: ReactNode;

  /**
   * The optional title of the section, which will be displayed as a heading.
   */
  title?: string;
}

/**
 * A reusable Section component that renders a section element with an optional title.
 *
 * @param {SectionProps} props - The props for the Section component.
 *
 * @example
 * ```tsx
 * import Section from '@dront/components/Section';
 *
 * const MyComponent = () => (
 *   <Section title="My Section Title">
 *     <p>This is the content inside the section.</p>
 *   </Section>
 * );
 * ```
 */
const Section = ({ children, title }: SectionProps) => {
  return (
    <Box component="section" aria-label={title}>
      {title && (
        <Typography
          variant="h2"
          sx={{
            fontWeight: 600,
            fontSize: 'clamp(1rem, 1.5vw + 0.5rem, 1.375rem)',
            lineHeight: '100%',
            letterSpacing: 0,
            mb: 3.5
          }}
        >
          {title}
        </Typography>
      )}

      {children}
    </Box>
  );
};

export default Section;
