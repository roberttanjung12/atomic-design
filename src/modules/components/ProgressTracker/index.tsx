import { DocView, ProgressTracker } from '@/@dront/components';

import BasicExample from './ProgressTrackerBasic';
import basicExampleCode from './ProgressTrackerBasic?raw';
import ColorsExample from './ProgressTrackerColors';
import colorsExampleCode from './ProgressTrackerColors?raw';
import DemoExample from './ProgressTrackerDemo';
import demoExampleCode from './ProgressTrackerDemo?raw';
import SizesExample from './ProgressTrackerSizes';
import sizesExampleCode from './ProgressTrackerSizes?raw';
import VerticalExample from './ProgressTrackerVertical';
import verticalExampleCode from './ProgressTrackerVertical?raw';

const ProgressTrackerModule = () => {
  return (
    <DocView
      contributors={['Bagus Nur Solayman']}
      overview="The `ProgressTracker` component is a versatile stepper/flow indicator that displays a sequence of steps with visual status indicators. Perfect for multi-step forms, onboarding flows, or any process that needs to show progress through a series of stages."
      sections={[
        {
          title: 'Interactive Demo',
          descriptions:
            'Interactive demo yang menunjukkan ProgressTracker component sesuai design yang diberikan. Gunakan tombol navigasi atau klik langsung pada step untuk melihat perubahan status.',
          example: <DemoExample />,
          exampleCode: demoExampleCode
        },
        {
          title: 'Basic Usage',
          descriptions:
            'A simple progress tracker with clickable steps. This example shows the basic implementation following the design from the provided screenshot with numbered circles and step labels.',
          example: <BasicExample />,
          exampleCode: basicExampleCode
        },
        {
          title: 'Sizes',
          descriptions:
            'The progress tracker supports three sizes: `sm`, `md` (default), and `lg`. Each size adjusts the step circles, spacing, and typography proportionally.',
          example: <SizesExample />,
          exampleCode: sizesExampleCode
        },
        {
          title: 'Color Variants',
          descriptions:
            'Customize the color scheme using the `color` prop. Available options include `primary` (default), `secondary`, `success`, `warning`, and `error`.',
          example: <ColorsExample />,
          exampleCode: colorsExampleCode
        },
        {
          title: 'Vertical Orientation',
          descriptions:
            'The progress tracker can be displayed vertically using `orientation="vertical"`. This example also demonstrates the use of descriptions for each step.',
          example: <VerticalExample />,
          exampleCode: verticalExampleCode
        }
      ]}
      propsDoc={{
        component: ProgressTracker,
        propDefinitions: {
          steps: {
            type: 'Step[]',
            description: 'Array of step objects to display'
          },
          activeStep: {
            type: 'number',
            default: '0',
            description: 'Currently active step index (0-based)'
          },
          size: {
            type: "'sm' | 'md' | 'lg'",
            default: "'md'",
            description: 'Size variant'
          },
          orientation: {
            type: "'horizontal' | 'vertical'",
            default: "'horizontal'",
            description: 'Layout direction'
          },
          showLabels: {
            type: 'boolean',
            default: 'true',
            description: 'Whether to show step labels'
          },
          showDescriptions: {
            type: 'boolean',
            default: 'false',
            description: 'Whether to show step descriptions'
          },
          clickable: {
            type: 'boolean',
            default: 'false',
            description: 'Whether steps are clickable'
          },
          color: {
            type: "'primary' | 'secondary' | 'success' | 'warning' | 'error'",
            default: "'primary'",
            description: 'Color scheme'
          },
          onStepClick: {
            type: 'func',
            description: 'Callback for step clicks'
          },
          showConnectors: {
            type: 'boolean',
            default: 'true',
            description: 'Whether to show connector lines between steps'
          },
          connector: {
            type: 'ReactNode',
            description: 'Custom connector element'
          },
          alternativeLabel: {
            type: 'boolean',
            default: 'false',
            description: 'Alternative label positioning'
          },
          className: {
            type: 'string',
            description: 'Additional CSS class name'
          },
          sx: {
            type: 'SxProps<Theme>',
            description: 'Material-UI sx prop for custom styling'
          }
        }
      }}
    />
  );
};

export default ProgressTrackerModule;
