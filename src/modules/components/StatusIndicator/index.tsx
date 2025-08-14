import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import { CodeViewer, Section, TextHighlighter } from '@/@dront/components';
import BasicExample from './StatusIndicatorBasic';
import basicExampleCode from './StatusIndicatorBasic?raw';
import ColorExample from './StatusIndicatorColor';
import colorExampleCode from './StatusIndicatorColor?raw';
import TooltipExample from './StatusIndicatorTooltip';
import tooltipExampleCode from './StatusIndicatorTooltip?raw';
import VariantExample from './StatusIndicatorVariant';
import variantExampleCode from './StatusIndicatorVariant?raw';

const FieldTextModule = () => {
  return (
    <Stack spacing={4}>
      <TextHighlighter text="The `StatusIndicator` component is a versatile UI component used to visually communicate the current state or progress of an item, process, or action. By using colors, styles, and tooltips, it helps users quickly interpret system feedback without needing to read lengthy messages." />

      <Section title="Basic">
        <Typography mb={2}>
          A simple label paired with a status color, ideal for straightforward success or completion states.
        </Typography>

        <CodeViewer code={basicExampleCode}>
          <BasicExample />
        </CodeViewer>
      </Section>

      <Section title="Color">
        <Typography mb={2}>Multiple color options to represent various states.</Typography>

        <CodeViewer code={colorExampleCode}>
          <ColorExample />
        </CodeViewer>
      </Section>

      <Section title="Variant">
        <Typography mb={2}>Different styles for flexibility design.</Typography>

        <CodeViewer code={variantExampleCode}>
          <VariantExample />
        </CodeViewer>
      </Section>

      <Section title="Tooltip">
        <Typography mb={2}>
          Optional hover text providing more context or details about the status without cluttering the UI.
        </Typography>

        <CodeViewer code={tooltipExampleCode}>
          <TooltipExample />
        </CodeViewer>
      </Section>
    </Stack>
  );
};

export default FieldTextModule;
