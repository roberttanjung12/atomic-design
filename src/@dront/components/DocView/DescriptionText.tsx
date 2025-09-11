import { TextHighlighter } from '@/@dront/components';
import type { TextHighlighterProps } from '../TextHighlighter';

/**
 * Props for the `DescriptionText` component.
 */
interface DescriptionTextProps {
  /**
   * The text content to highlight.
   * Passed directly to the `TextHighlighter` component.
   */
  text: TextHighlighterProps['text'];
}

/**
 * `DescriptionText` is a wrapper component around `TextHighlighter`
 * that applies consistent spacing and styling for section descriptions.
 *
 * @param {DescriptionTextProps} props - The component props.
 * @param {TextHighlighterProps['text']} props.text - The text content to highlight.
 *
 * @returns {JSX.Element} A styled `TextHighlighter` component.
 */
const DescriptionText = ({ text }: DescriptionTextProps) => {
  return (
    <TextHighlighter
      sx={{
        mb: 2
      }}
      text={text}
    />
  );
};

export default DescriptionText;
