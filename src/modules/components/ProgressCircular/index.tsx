import { DocView, ProgressBar } from '@/@dront/components';

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
    <DocView
      contributors={['Bagus Nur Solayman']}
      overview="The `ProgressBar` component with `type='circular'` provides a powerful and customizable circular progress indicator. It supports various styles, sizes, colors, thickness customization, and advanced features like custom center labels, estimated time display, and background options. Perfect for showing loading states, task completion, and upload/download progress in a modern circular format."
      sections={[
        {
          title: 'Basic Usage',
          descriptions:
            'A simple circular progress showing completion percentage. Set type="circular" to enable circular progress mode. The value prop accepts a number between 0 and 100, and percentage is displayed in the center by default.',
          example: <CircularBasic />,
          exampleCode: circularBasicCode
        },
        {
          title: 'Size Variations',
          descriptions:
            'The size prop controls the overall scale of the circular progress. Available preset options are small, medium, and large. Each size maintains proper proportions and readability.',
          example: <CircularSizes />,
          exampleCode: circularSizesCode
        },
        {
          title: 'Custom Sizes',
          descriptions:
            'Use circularSize prop to set custom pixel dimensions for the circular progress. This gives you precise control over the size and overrides the preset size values.',
          example: <CircularCustomSizes />,
          exampleCode: circularCustomSizesCode
        },
        {
          title: 'Color Variants',
          descriptions:
            'The color prop supports multiple theme palette options including primary, secondary, success, warning, error, and info. Colors are applied to both the progress arc and center text.',
          example: <CircularColors />,
          exampleCode: circularColorsCode
        },
        {
          title: 'Custom Thickness',
          descriptions:
            'The thickness prop controls the stroke width of the circular progress arc. Accepts values from 1 to 10, with 4 being the default. Thicker strokes provide more visual weight.',
          example: <CircularThickness />,
          exampleCode: circularThicknessCode
        },
        {
          title: 'Custom Center Labels',
          descriptions:
            'Use centerLabel prop to display custom content in the center of the circular progress. Perfect for showing status text, icons, or any custom content instead of percentage.',
          example: <CircularCustomLabels />,
          exampleCode: circularCustomLabelsCode
        },
        {
          title: 'With Labels and Time',
          descriptions:
            'Display circular progress with labels and time information in a compact, well-aligned layout. The circular progress and text content are positioned side-by-side with proper spacing for better visual balance and readability.',
          example: <CircularWithLabels />,
          exampleCode: circularWithLabelsCode
        },
        {
          title: 'External Percentage',
          descriptions:
            'Display the percentage outside the circular progress for better readability and cleaner layout alignment. This approach provides better visual balance compared to scattered labels and is recommended when you need external text information while maintaining a professional appearance.',
          example: <CircularExternalPercentage />,
          exampleCode: circularExternalPercentageCode
        },
        {
          title: 'Clean Design',
          descriptions:
            'Clean and minimal circular progress design without percentage or labels. Perfect for modern interfaces where simplicity and visual focus are priorities.',
          example: <CircularClean />,
          exampleCode: circularCleanCode
        },
        {
          title: 'Indeterminate Progress',
          descriptions:
            'Set indeterminate to true for loading states where progress cannot be determined. This creates a continuous spinning animation indicating ongoing activity.',
          example: <CircularIndeterminate />,
          exampleCode: circularIndeterminateCode
        },
        {
          title: 'Interactive Demo',
          descriptions:
            'Interactive demonstration showing different circular progress options in real-time. Test various properties like size, thickness, colors, and center labels dynamically.',
          example: <CircularTest />,
          exampleCode: circularTestCode
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
              'Type of progress indicator. Set to "circular" to enable circular progress mode with all circular-specific features.'
          },
          size: {
            type: `'small' | 'medium' | 'large'`,
            default: `'medium'`,
            description:
              'Preset size of the circular progress. Small (60px), medium (80px), large (100px). Can be overridden by circularSize prop.'
          },
          circularSize: {
            type: 'number',
            default: '80',
            description:
              'Custom size of circular progress in pixels. Overrides the preset size prop and allows precise control over dimensions.'
          },
          thickness: {
            type: 'number',
            default: '4',
            description:
              'Thickness of the circular progress stroke in pixels. Accepts values from 1 to 10. Higher values create more prominent progress arcs.'
          },
          color: {
            type: `'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'`,
            default: `'primary'`,
            description:
              'Color variant using theme palette colors. Applied to both the progress arc and default center text styling.'
          },
          showPercentage: {
            type: 'boolean',
            default: 'true',
            description:
              'Whether to show the percentage text in the center of the circular progress. Can be disabled for custom center content.'
          },
          showCenterLabel: {
            type: 'boolean',
            description:
              'Whether to show content in the center of circular progress. Default is true for circular type, allowing percentage or custom labels to be displayed.'
          },
          centerLabel: {
            type: 'string',
            description:
              'Custom label to show in center of circular progress. Overrides percentage display and allows for status text, icons, or any custom content.'
          },
          percentageColor: {
            type: `'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'text.primary' | 'text.secondary'`,
            default: `'primary'`,
            description:
              'Color for the percentage text displayed in the center. Supports theme colors and text color variants for better contrast control.'
          },
          showBackground: {
            type: 'boolean',
            default: 'true',
            description:
              'Whether to show the background circle behind the progress arc. Can be disabled for floating progress arc effect.'
          },
          label: {
            type: 'string',
            description:
              'External label text displayed alongside the circular progress. Useful for showing task names or descriptions.'
          },
          showEstimatedTime: {
            type: 'boolean',
            default: 'false',
            description:
              'Whether to display estimated time remaining. Works in conjunction with estimatedTimeSeconds prop.'
          },
          estimatedTimeSeconds: {
            type: 'number',
            description:
              'Estimated time in seconds for completion. Automatically formatted to appropriate units (s, m, h) when showEstimatedTime is enabled.'
          },
          indeterminate: {
            type: 'boolean',
            default: 'false',
            description:
              'Whether the progress is in indeterminate state. Creates a continuous spinning animation for unknown progress durations.'
          },
          className: {
            type: 'string',
            description: 'Additional CSS class name for custom styling and layout control.'
          },
          sx: {
            type: 'object',
            description:
              'Additional styling using Material-UI sx prop for advanced customization of the circular progress container and elements.'
          }
        }
      }}
    />
  );
};

export default ProgressCircularModule;
