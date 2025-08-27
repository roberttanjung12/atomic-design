import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import { CodeViewer, Section, TextHighlighter } from '@/@dront/components';

import BasicExample from './ProgressBarBasic';
import basicExampleCode from './ProgressBarBasic?raw';
import ColorsExample from './ProgressBarColors';
import colorsExampleCode from './ProgressBarColors?raw';
import CustomExample from './ProgressBarCustom';
import customExampleCode from './ProgressBarCustom?raw';
import CustomColorsExample from './ProgressBarCustomColors';
import customColorsExampleCode from './ProgressBarCustomColors?raw';
import IndeterminateExample from './ProgressBarIndeterminate';
import indeterminateExampleCode from './ProgressBarIndeterminate?raw';
import PercentageInsideExample from './ProgressBarPercentageInside';
import percentageInsideExampleCode from './ProgressBarPercentageInside?raw';
import RadiusExample from './ProgressBarRadius';
import radiusExampleCode from './ProgressBarRadius?raw';
import TestExample from './ProgressBarRadiusTest';
import testExampleCode from './ProgressBarRadiusTest?raw';
import SizesExample from './ProgressBarSizes';
import sizesExampleCode from './ProgressBarSizes?raw';
import StripedExample from './ProgressBarStriped';
import stripedExampleCode from './ProgressBarStriped?raw';
import WithTimeExample from './ProgressBarWithTime';
import withTimeExampleCode from './ProgressBarWithTime?raw';
import SimpleUploadExample from './SimpleUploadExample';
import simpleUploadExampleCode from './SimpleUploadExample?raw';
import UploadTestExample from './UploadFileTests';
import uploadTestExampleCode from './UploadFileTests?raw';
import UploadExample from './UploadWithProgress';
import uploadExampleCode from './UploadWithProgress?raw';

const ProgressBarModule = () => {
  return (
    <Stack spacing={4}>
      <TextHighlighter text="The `ProgressBar` component is a powerful and customizable progress indicator that supports various styles, sizes, colors, and features like estimated time display, striped animations, custom labels, and percentage positioning. Perfect for showing upload/download progress, loading states, and task completion." />

      {/* Basic */}
      <Section title="Basic">
        <Typography mb={2}>
          A simple progress bar showing completion percentage. The <code>value</code> prop accepts a number between 0
          and 100. The percentage and label are now positioned next to each other for better layout.
        </Typography>
        <CodeViewer code={basicExampleCode}>
          <BasicExample />
        </CodeViewer>
      </Section>

      {/* Interactive Test */}
      <Section title="Radius Test">
        <Typography mb={2}>
          Interactive demonstration showing different radius options in real-time. Shows the visual difference between
          preset sizes and custom values.
        </Typography>
        <CodeViewer code={testExampleCode}>
          <TestExample />
        </CodeViewer>
      </Section>

      {/* Custom Percentage Colors */}
      <Section title="Custom Percentage Colors">
        <Typography mb={2}>
          Use <code>percentageColor</code> prop to customize the color of the percentage text. You can use any of the
          theme colors or text variants.
        </Typography>
        <CodeViewer code={customColorsExampleCode}>
          <CustomColorsExample />
        </CodeViewer>
      </Section>

      {/* Percentage Inside Bar */}
      <Section title="Percentage Inside Bar">
        <Typography mb={2}>
          Enable <code>showPercentageInside</code> to display the percentage inside the progress bar. Use{' '}
          <code>percentagePosition</code> to control positioning: <code>left</code>, <code>center</code>, or{' '}
          <code>right</code>.
        </Typography>
        <CodeViewer code={percentageInsideExampleCode}>
          <PercentageInsideExample />
        </CodeViewer>
      </Section>

      {/* Simple Upload Examples */}
      <Section title="Simple Upload Examples">
        <Typography mb={2}>
          Clean and simple upload progress examples similar to common file upload interfaces. Shows various states
          including progress, completion, and estimated time remaining with different radius styles.
        </Typography>
        <CodeViewer code={simpleUploadExampleCode}>
          <SimpleUploadExample />
        </CodeViewer>
      </Section>

      {/* Upload with Progress */}
      <Section title="File Upload with Progress">
        <Typography mb={2}>
          A complete file upload component demonstrating real-world usage with drag & drop, multiple files, progress
          tracking, and estimated time remaining. Perfect for file upload interfaces.
        </Typography>
        <CodeViewer code={uploadExampleCode}>
          <UploadExample />
        </CodeViewer>
      </Section>

      {/* Upload File Tests */}
      <Section title="Upload File Examples & Scenarios">
        <Typography mb={2}>
          Comprehensive upload file examples showing different states and scenarios including multiple files,
          pause/resume functionality, error handling, and various progress styles. Includes interactive controls and
          realistic file upload simulations.
        </Typography>
        <CodeViewer code={uploadTestExampleCode}>
          <UploadTestExample />
        </CodeViewer>
      </Section>

      {/* Sizes */}
      <Section title="Sizes">
        <Typography mb={2}>
          The <code>size</code> prop controls the height and overall scale of the progress bar. Available options are{' '}
          <code>small</code>, <code>medium</code>, and <code>large</code>.
        </Typography>
        <CodeViewer code={sizesExampleCode}>
          <SizesExample />
        </CodeViewer>
      </Section>

      {/* Radius */}
      <Section title="Border Radius">
        <Typography mb={2}>
          The <code>radius</code> prop controls the border radius of the progress bar. You can use preset sizes (
          <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code>) or custom number values. By default, the
          progress bar has no radius (square corners).
        </Typography>
        <CodeViewer code={radiusExampleCode}>
          <RadiusExample />
        </CodeViewer>
      </Section>

      {/* Colors */}
      <Section title="Colors">
        <Typography mb={2}>
          The <code>color</code> prop supports multiple palette options including <code>primary</code>,{' '}
          <code>secondary</code>, <code>success</code>, <code>warning</code>, <code>error</code>, and <code>info</code>.
        </Typography>
        <CodeViewer code={colorsExampleCode}>
          <ColorsExample />
        </CodeViewer>
      </Section>

      {/* With Estimated Time */}
      <Section title="With Estimated Time">
        <Typography mb={2}>
          Enable <code>showEstimatedTime</code> and provide <code>estimatedTimeSeconds</code> to display remaining time.
          Time is automatically formatted as seconds (s), minutes (m), or hours (h) based on the duration.
        </Typography>
        <CodeViewer code={withTimeExampleCode}>
          <WithTimeExample />
        </CodeViewer>
      </Section>

      {/* Striped Animation */}
      <Section title="Striped Animation">
        <Typography mb={2}>
          Add <code>striped</code> prop to enable animated diagonal stripes that move across the progress bar, providing
          a visual indication of ongoing activity.
        </Typography>
        <CodeViewer code={stripedExampleCode}>
          <StripedExample />
        </CodeViewer>
      </Section>

      {/* Custom Labels and Height */}
      <Section title="Custom Labels and Height">
        <Typography mb={2}>
          Use <code>label</code> prop for custom text, <code>showPercentage</code> to hide/show percentage, and{' '}
          <code>height</code> prop to customize the progress bar thickness.
        </Typography>
        <CodeViewer code={customExampleCode}>
          <CustomExample />
        </CodeViewer>
      </Section>

      {/* Indeterminate */}
      <Section title="Indeterminate">
        <Typography mb={2}>
          Set <code>indeterminate</code> to true for loading states where progress cannot be determined. This creates a
          continuous animation indicating ongoing activity.
        </Typography>
        <CodeViewer code={indeterminateExampleCode}>
          <IndeterminateExample />
        </CodeViewer>
      </Section>
    </Stack>
  );
};

export default ProgressBarModule;
