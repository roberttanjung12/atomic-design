import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import { CodeViewer, Section, TextHighlighter } from '@/@dront/components';

import BasicExample from './ButtonBasic';
import basicExampleCode from './ButtonBasic?raw';
import DisabledExample from './ButtonDisabled';
import disabledExampleCode from './ButtonDisabled?raw';
import FullWidthExample from './ButtonFullWidth';
import fullWidthExampleCode from './ButtonFullWidth?raw';
import IconExample from './ButtonIcon';
import iconExampleCode from './ButtonIcon?raw';
import LoadingExample from './ButtonLoading';
import loadingExampleCode from './ButtonLoading?raw';
import OutlineStatesExample from './ButtonOutlineStates';
import outlineStatesExampleCode from './ButtonOutlineStates?raw';
import SolidStatesExample from './ButtonSolidStates';
import solidStatesExampleCode from './ButtonSolidStates?raw';
import TextStatesExample from './ButtonTextStates';
import textStatesExampleCode from './ButtonTextStates?raw';

const ButtonModule = () => {
  return (
    <Stack spacing={4}>
      <TextHighlighter text="The `Button` component is a versatile and accessible button with multiple variants, sizes, and states. It supports loading states, icons, and follows modern design principles while maintaining accessibility standards." />

      {/* Basic */}
      <Section title="Basic">
        <Typography mb={2}>
          A simple button with default settings. The button uses the <code>solid</code> variant, <code>md</code> size,
          and <code>primary</code> color by default.
        </Typography>
        <CodeViewer code={basicExampleCode}>
          <BasicExample />
        </CodeViewer>
      </Section>

      {/* Solid Button - Complete States */}
      <Section title="Solid Button">
        <Typography mb={2}>
          The <code>solid</code> variant provides a filled button with strong visual weight. This section demonstrates
          all available sizes (XS to XL), states (default, hover, active, disabled), and color variants for the solid
          button style.
        </Typography>
        <CodeViewer code={solidStatesExampleCode}>
          <SolidStatesExample />
        </CodeViewer>
      </Section>

      {/* Outline Button - Complete States */}
      <Section title="Outline Button">
        <Typography mb={2}>
          The <code>outline</code> variant provides a transparent button with a colored border. On hover, it transforms
          to a solid style. This section shows all sizes, states, and color variants for the outline button style.
        </Typography>
        <CodeViewer code={outlineStatesExampleCode}>
          <OutlineStatesExample />
        </CodeViewer>
      </Section>

      {/* Text Button - Complete States */}
      <Section title="Text Button">
        <Typography mb={2}>
          The <code>text</code> variant provides a minimal button style with no border and transparent background. It
          shows subtle background changes on hover and active states. This section demonstrates all sizes, states, and
          color variants for the text button style.
        </Typography>
        <CodeViewer code={textStatesExampleCode}>
          <TextStatesExample />
        </CodeViewer>
      </Section>

      {/* Icon */}
      <Section title="Icon">
        <Typography mb={2}>
          Add icons to buttons using <code>startIcon</code> (left side) or <code>endIcon</code> (right side) props.
          Icons automatically adjust their size based on the button size.
        </Typography>
        <CodeViewer code={iconExampleCode}>
          <IconExample />
        </CodeViewer>
      </Section>

      {/* Loading */}
      <Section title="Loading State">
        <Typography mb={2}>
          The <code>loading</code> prop displays a spinner and disables interactions. The loading state prevents
          double-clicks and provides visual feedback for asynchronous operations.
        </Typography>
        <CodeViewer code={loadingExampleCode}>
          <LoadingExample />
        </CodeViewer>
      </Section>

      {/* Disabled */}
      <Section title="Disabled State">
        <Typography mb={2}>
          The <code>disabled</code> prop disables the button and applies appropriate styling. Disabled buttons are not
          interactive and have reduced opacity with proper accessibility attributes.
        </Typography>
        <CodeViewer code={disabledExampleCode}>
          <DisabledExample />
        </CodeViewer>
      </Section>

      {/* Full Width */}
      <Section title="Full Width">
        <Typography mb={2}>
          The <code>fullWidth</code> prop makes the button expand to fill its container width. This works with all
          variants (solid, outline, text) and all sizes. The button will take 100% of its parent container width, making
          it perfect for mobile layouts, forms, or when you need consistent button widths.
        </Typography>
        <CodeViewer code={fullWidthExampleCode}>
          <FullWidthExample />
        </CodeViewer>
      </Section>
    </Stack>
  );
};

export default ButtonModule;
