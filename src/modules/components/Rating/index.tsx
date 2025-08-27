import { Stack } from '@mui/material';
import { CodeViewer, Section, TextHighlighter } from '@/@dront/components';
import ParagraphWrapper from '@/@dront/components/ParagraphWrapper';
import RatingBasic from './Basic';
import ratingBasicCode from './Basic?raw';
import ControlledRating from './Controlled';
import controlledRatingCode from './Controlled?raw';
import RatingWithLabel from './WithLabel';
import ratingWithLabelCode from './WithLabel?raw';

const RatingComp = () => {
  return (
    <Stack spacing={4}>
      <TextHighlighter text="`Rating` is a customizable component for displaying and selecting a rating value, typically represented by stars. It supports both controlled and uncontrolled usage, custom labels under each star, hover effects, and disabled state." />

      <Section title="Basic">
        <ParagraphWrapper>
          <TextHighlighter text="Renders a simple 5-star rating in uncontrolled mode with an initial value." />

          <CodeViewer code={ratingBasicCode}>
            <RatingBasic />
          </CodeViewer>
        </ParagraphWrapper>
      </Section>

      <Section title="Controlled">
        <ParagraphWrapper>
          <TextHighlighter text="Use the `value` and `onChange` props to fully control the rating from the parent component." />

          <CodeViewer code={controlledRatingCode}>
            <ControlledRating />
          </CodeViewer>
        </ParagraphWrapper>
      </Section>

      <Section title="With Labels">
        <ParagraphWrapper>
          <TextHighlighter text="Pass a `labels` array to show text under each star." />
          <TextHighlighter text="Useful for surveys or feedback forms." />

          <CodeViewer code={ratingWithLabelCode}>
            <RatingWithLabel />
          </CodeViewer>
        </ParagraphWrapper>
      </Section>

      <Section title="Props">
        <ParagraphWrapper>
          <TextHighlighter text="&#8226; `disabled?: boolean` - Disables all interactions when `true`. Default: `false`." />
          <TextHighlighter text="&#8226; `labels?: string[]` - Array of labels to display under each star. If not provided, uses `length`." />
          <TextHighlighter text="&#8226; `length?: number` - Number of stars to display (ignored if `labels` is provided). Default: `0`." />
          <TextHighlighter text="&#8226; `defaultValue?: number` - Initial value for uncontrolled usage. Default: `0`." />
          <TextHighlighter text="&#8226; `value?: number` - Controlled value for the rating. When set, component is fully controlled." />
          <TextHighlighter text="&#8226; `onChange?: (value: number) => void` - Callback fired when the rating changes." />
        </ParagraphWrapper>
      </Section>
    </Stack>
  );
};

export default RatingComp;
