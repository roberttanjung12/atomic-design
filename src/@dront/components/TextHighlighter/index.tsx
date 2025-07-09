import { Fragment } from 'react';
import { Typography } from '@mui/material';

interface TextHighlighterProps {
  text: string;
}

/**
 * A React component that highlights text enclosed in backticks (`).
 *
 * @param {Object} props - The component props.
 * @param {string} props.text - The text to be rendered, with portions enclosed in backticks highlighted.
 *
 * @example
 * // Example usage:
 * <TextHighlighter text="This is `highlighted` text." />
 */
const TextHighlighter = ({ text }: TextHighlighterProps) => {
  const parts = text.split(/(`[^`]+`)/g);

  return (
    <Typography>
      {parts.map((part, index) =>
        part.startsWith('`') && part.endsWith('`') ? (
          <Typography
            key={index}
            component="code"
            sx={{
              bgcolor: 'grey.100',
              px: 0.5,
              borderRadius: '4px',
              fontFamily: 'monospace',
              fontSize: '0.875em'
            }}
          >
            {part.slice(1, -1)}
          </Typography>
        ) : (
          <Fragment key={index}>{part}</Fragment>
        )
      )}
    </Typography>
  );
};

export default TextHighlighter;
