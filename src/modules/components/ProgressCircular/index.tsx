import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import { CodeViewer, Section, TextHighlighter } from '@/@dront/components';

// Basic Circular Progress Examples
import CircularBasic from './CircularBasic';
import circularBasicCode from './CircularBasic?raw';

// Clean Progress Circle
import CircularClean from './CircularClean';
import circularCleanCode from './CircularClean?raw';

// Color Variants
import CircularColors from './CircularColors';
import circularColorsCode from './CircularColors?raw';

// Custom Labels in Center
import CircularCustomLabels from './CircularCustomLabels';
import circularCustomLabelsCode from './CircularCustomLabels?raw';

// Custom Sizes
import CircularCustomSizes from './CircularCustomSizes';
import circularCustomSizesCode from './CircularCustomSizes?raw';

// External Percentage Display
import CircularExternalPercentage from './CircularExternalPercentage';
import circularExternalPercentageCode from './CircularExternalPercentage?raw';

// Indeterminate Progress
import CircularIndeterminate from './CircularIndeterminate';
import circularIndeterminateCode from './CircularIndeterminate?raw';

// Special Layout Cases
import CircularSizes from './CircularSizes';
import circularSizesCode from './CircularSizes?raw';
import CircularSpecialCases from './CircularSpecialCases';
import circularSpecialCasesCode from './CircularSpecialCases?raw';

// Interactive Test
import CircularTest from './CircularTest';
import circularTestCode from './CircularTest?raw';

// Custom Thickness
import CircularThickness from './CircularThickness';
import circularThicknessCode from './CircularThickness?raw';

// With Labels and Percentage
import CircularWithLabels from './CircularWithLabels';
import circularWithLabelsCode from './CircularWithLabels?raw';

const ProgressCircularModule = () => {
  return (
    <Stack spacing={4}>
      <TextHighlighter text="The `ProgressCircular` component is a powerful and customizable circular progress indicator that supports various styles, sizes, colors, thickness, and features like custom center labels, estimated time display, and background options. Perfect for showing loading states, task completion, and upload/download progress in a circular format." />

      {/* Basic Usage */}
      <Section title="Basic Usage">
        <Typography mb={2}>
          A simple circular progress showing completion percentage. The <code>value</code> prop accepts a number between
          0 and 100. Set <code>type="circular"</code> to enable circular progress mode.
        </Typography>
        <CodeViewer code={circularBasicCode}>
          <CircularBasic />
        </CodeViewer>
      </Section>

      {/* Interactive Test */}
      <Section title="Interactive Test">
        <Typography mb={2}>
          Interactive demonstration showing different circular progress options in real-time. Test various properties
          like size, thickness, colors, and center labels.
        </Typography>
        <CodeViewer code={circularTestCode}>
          <CircularTest />
        </CodeViewer>
      </Section>

      {/* Clean Progress Circle */}
      <Section title="Clean Progress Circle">
        <Typography mb={2}>
          Clean and minimal circular progress design. Perfect for modern interfaces where simplicity is key.
        </Typography>
        <CodeViewer code={circularCleanCode}>
          <CircularClean />
        </CodeViewer>
      </Section>

      {/* External Percentage Display */}
      <Section title="External Percentage Display">
        <Typography mb={2}>
          Display the percentage outside the circular progress for better readability and layout flexibility.
        </Typography>
        <CodeViewer code={circularExternalPercentageCode}>
          <CircularExternalPercentage />
        </CodeViewer>
      </Section>

      {/* Special Layout Cases */}
      <Section title="Special Layout Cases">
        <Typography mb={2}>
          Various special layout configurations and use cases for circular progress indicators in different contexts.
        </Typography>
        <CodeViewer code={circularSpecialCasesCode}>
          <CircularSpecialCases />
        </CodeViewer>
      </Section>

      {/* Size Variations */}
      <Section title="Size Variations">
        <Typography mb={2}>
          The <code>size</code> prop controls the overall scale of the circular progress. Available options are{' '}
          <code>small</code>, <code>medium</code>, and <code>large</code>. You can also use <code>circularSize</code>{' '}
          for custom pixel values.
        </Typography>
        <CodeViewer code={circularSizesCode}>
          <CircularSizes />
        </CodeViewer>
      </Section>

      {/* Custom Thickness */}
      <Section title="Custom Thickness">
        <Typography mb={2}>
          The <code>thickness</code> prop controls the stroke width of the circular progress. Accepts values from 1 to
          10. Default thickness is 4.
        </Typography>
        <CodeViewer code={circularThicknessCode}>
          <CircularThickness />
        </CodeViewer>
      </Section>

      {/* With Labels and Percentage */}
      <Section title="With Labels and Percentage">
        <Typography mb={2}>
          Display labels and percentage text alongside the circular progress. Use <code>label</code> prop for custom
          text and various positioning options.
        </Typography>
        <CodeViewer code={circularWithLabelsCode}>
          <CircularWithLabels />
        </CodeViewer>
      </Section>

      {/* Custom Center Labels */}
      <Section title="Custom Center Labels">
        <Typography mb={2}>
          Use <code>centerLabel</code> prop to display custom content in the center of the circular progress. Perfect
          for showing status, icons, or custom text.
        </Typography>
        <CodeViewer code={circularCustomLabelsCode}>
          <CircularCustomLabels />
        </CodeViewer>
      </Section>

      {/* Custom Sizes */}
      <Section title="Custom Sizes">
        <Typography mb={2}>
          Use <code>circularSize</code> prop to set custom pixel dimensions for the circular progress. This overrides
          the preset <code>size</code> values.
        </Typography>
        <CodeViewer code={circularCustomSizesCode}>
          <CircularCustomSizes />
        </CodeViewer>
      </Section>

      {/* Indeterminate Progress */}
      <Section title="Indeterminate Progress">
        <Typography mb={2}>
          Set the component to indeterminate mode for loading states where progress cannot be determined. This creates a
          continuous spinning animation.
        </Typography>
        <CodeViewer code={circularIndeterminateCode}>
          <CircularIndeterminate />
        </CodeViewer>
      </Section>

      {/* Color Variants */}
      <Section title="Color Variants">
        <Typography mb={2}>
          The <code>color</code> prop supports multiple palette options including <code>primary</code>,{' '}
          <code>secondary</code>, <code>success</code>, <code>warning</code>, <code>error</code>, and <code>info</code>.
        </Typography>
        <CodeViewer code={circularColorsCode}>
          <CircularColors />
        </CodeViewer>
      </Section>
    </Stack>
  );
};

export default ProgressCircularModule;
