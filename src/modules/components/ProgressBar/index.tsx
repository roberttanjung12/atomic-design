import { DocView, ProgressBar } from '@/@dront/components';

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

const ProgressBarModule = () => {
  return (
    <DocView
      contributors={['Bagus Nur Solayman']}
      overview="The `ProgressBar` component is a powerful and customizable progress indicator that supports various styles, sizes, colors, and features like estimated time display, striped animations, custom labels, and percentage positioning. Perfect for showing upload/download progress, loading states, and task completion."
      sections={[
        {
          title: 'Basic',
          descriptions:
            'A simple progress bar showing completion percentage. The value prop accepts a number between 0 and 100. The percentage and label are now positioned next to each other for better layout.',
          example: <BasicExample />,
          exampleCode: basicExampleCode
        },
        {
          title: 'Radius Test',
          descriptions:
            'Interactive demonstration showing different radius options in real-time. Shows the visual difference between preset sizes and custom values.',
          example: <TestExample />,
          exampleCode: testExampleCode
        },
        {
          title: 'Custom Percentage Colors',
          descriptions:
            'Use percentageColor prop to customize the color of the percentage text. You can use any of the theme colors or text variants.',
          example: <CustomColorsExample />,
          exampleCode: customColorsExampleCode
        },
        {
          title: 'Percentage Inside Bar',
          descriptions:
            'Enable showPercentageInside to display the percentage inside the progress bar. Use percentagePosition to control positioning: left, center, or right.',
          example: <PercentageInsideExample />,
          exampleCode: percentageInsideExampleCode
        },
        {
          title: 'Sizes',
          descriptions:
            'The size prop controls the height and overall scale of the progress bar. Available options are small, medium, and large.',
          example: <SizesExample />,
          exampleCode: sizesExampleCode
        },
        {
          title: 'Border Radius',
          descriptions:
            'The radius prop controls the border radius of the progress bar. You can use preset sizes (sm, md, lg, xl) or custom number values. By default, the progress bar has no radius (square corners).',
          example: <RadiusExample />,
          exampleCode: radiusExampleCode
        },
        {
          title: 'Colors',
          descriptions:
            'The color prop supports multiple palette options including primary, secondary, success, warning, error, and info.',
          example: <ColorsExample />,
          exampleCode: colorsExampleCode
        },
        {
          title: 'With Estimated Time',
          descriptions:
            'Enable showEstimatedTime and provide estimatedTimeSeconds to display remaining time. Time is automatically formatted as seconds (s), minutes (m), or hours (h) based on the duration.',
          example: <WithTimeExample />,
          exampleCode: withTimeExampleCode
        },
        {
          title: 'Striped Animation',
          descriptions:
            'Add striped prop to enable animated diagonal stripes that move across the progress bar, providing a visual indication of ongoing activity.',
          example: <StripedExample />,
          exampleCode: stripedExampleCode
        },
        {
          title: 'Custom Labels and Height',
          descriptions:
            'Use label prop for custom text, showPercentage to hide/show percentage, and height prop to customize the progress bar thickness.',
          example: <CustomExample />,
          exampleCode: customExampleCode
        },
        {
          title: 'Indeterminate',
          descriptions:
            'Set indeterminate to true for loading states where progress cannot be determined. This creates a continuous animation indicating ongoing activity.',
          example: <IndeterminateExample />,
          exampleCode: indeterminateExampleCode
        }
      ]}
      propsDoc={{
        component: ProgressBar,
        propDefinitions: {
          value: {
            type: 'number',
            required: true,
            description: 'The progress value between 0 and 100.'
          },
          type: {
            type: `'linear' | 'circular'`,
            default: `'linear'`,
            description:
              'Type of progress indicator. Linear shows a horizontal bar, circular shows a circular progress.'
          },
          showPercentage: {
            type: 'boolean',
            default: 'true',
            description: 'Whether to show the percentage text next to the progress bar.'
          },
          percentageColor: {
            type: `'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'text.primary' | 'text.secondary'`,
            default: `'primary'`,
            description: 'Color for the percentage text. Supports theme colors and text color variants.'
          },
          showEstimatedTime: {
            type: 'boolean',
            default: 'false',
            description: 'Whether to display estimated time remaining next to the progress.'
          },
          estimatedTimeSeconds: {
            type: 'number',
            description:
              'Estimated time in seconds. Only used when showEstimatedTime is true. Automatically formatted to appropriate units.'
          },
          size: {
            type: `'small' | 'medium' | 'large'`,
            default: `'medium'`,
            description: 'Size of the progress bar. Affects height and overall scale of the component.'
          },
          color: {
            type: `'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'`,
            default: `'primary'`,
            description: 'Color variant of the progress bar. Uses theme palette colors.'
          },
          striped: {
            type: 'boolean',
            default: 'false',
            description: 'Whether to show animated diagonal stripes on the progress bar for visual activity indication.'
          },
          label: {
            type: 'string',
            description: 'Custom label text to display next to the progress bar and percentage.'
          },
          height: {
            type: 'number',
            description: 'Custom height for the progress bar in pixels. Overrides the default size-based height.'
          },
          indeterminate: {
            type: 'boolean',
            default: 'false',
            description:
              'Whether the progress bar is in indeterminate state (continuous animation for unknown progress).'
          },
          showPercentageInside: {
            type: 'boolean',
            default: 'false',
            description: 'Whether to display the percentage inside the progress bar instead of outside.'
          },
          percentagePosition: {
            type: `'left' | 'center' | 'right'`,
            default: `'center'`,
            description: 'Position of the percentage text when showPercentageInside is true.'
          },
          radius: {
            type: `'sm' | 'md' | 'lg' | 'xl' | number`,
            description:
              'Border radius of the progress bar. Use preset sizes (sm=4px, md=8px, lg=12px, xl=16px) or custom number value in pixels.'
          },
          circularSize: {
            type: 'number',
            default: '80',
            description: 'Size of circular progress in pixels. Only applicable when type is "circular".'
          },
          thickness: {
            type: 'number',
            default: '4',
            description: 'Thickness of the circular progress stroke. Only applicable when type is "circular".'
          },
          showCenterLabel: {
            type: 'boolean',
            description:
              'Whether to show percentage in the center of circular progress. Default is true for circular, false for linear.'
          },
          centerLabel: {
            type: 'string',
            description:
              'Custom label to show in center of circular progress (overrides percentage). Only for type="circular".'
          },
          showBackground: {
            type: 'boolean',
            default: 'true',
            description:
              'Whether to show background circle for circular progress. Only applicable when type is "circular".'
          },
          className: {
            type: 'string',
            description: 'Additional CSS class name for custom styling.'
          },
          sx: {
            type: 'object',
            description: 'Additional styling using Material-UI sx prop for advanced customization.'
          }
        }
      }}
    />
  );
};

export default ProgressBarModule;
