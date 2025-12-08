import StatusIndicator from '@dront/ui/StatusIndicator';
import { DocView } from '@/@dront/components';
import BasicExample from './StatusIndicatorBasic';
import basicExampleCode from './StatusIndicatorBasic?raw';
import ColorExample from './StatusIndicatorColor';
import colorExampleCode from './StatusIndicatorColor?raw';
import TooltipExample from './StatusIndicatorTooltip';
import tooltipExampleCode from './StatusIndicatorTooltip?raw';
import VariantExample from './StatusIndicatorVariant';
import variantExampleCode from './StatusIndicatorVariant?raw';

const StatusIndicatorModule = () => {
  return (
    <DocView
      contributors={['Erghi Imannur Ichsan']}
      overview="The `StatusIndicator` component is a versatile UI component used to visually communicate the current state or progress of an item, process, or action. By using colors, styles, and tooltips, it helps users quickly interpret system feedback without needing to read lengthy messages."
      sections={[
        {
          title: 'Basic',
          descriptions:
            'A simple label paired with a status color, ideal for straightforward success or completion states.',
          example: <BasicExample />,
          exampleCode: basicExampleCode
        },
        {
          title: 'Color',
          descriptions: 'Multiple color options to represent various states.',
          example: <ColorExample />,
          exampleCode: colorExampleCode
        },
        {
          title: 'Variant',
          descriptions: 'Different styles for flexibility design.',
          example: <VariantExample />,
          exampleCode: variantExampleCode
        },
        {
          title: 'Tooltip',
          descriptions:
            'Optional hover text providing more context or details about the status without cluttering the UI.',
          example: <TooltipExample />,
          exampleCode: tooltipExampleCode
        }
      ]}
      propsDoc={{
        component: StatusIndicator,
        propDefinitions: {
          color: {
            type: `'success' | 'error' | 'warning' | 'info' | 'secondary'`,
            default: `'success'`,
            description: 'The color of the status indicator.'
          },
          label: {
            type: 'ReactNode',
            description:
              'The label text displayed next to the status dot. If not provided, it will default to the capitalized color name.'
          },
          size: {
            type: 'number',
            default: '12',
            description: 'The size (diameter) of the status dot in pixels.'
          },
          slotProps: {
            type: '{ root?: BoxProps }',
            description: 'Slot props for customizing components of the StatusIndicator.'
          },
          tooltip: {
            type: 'string | ReactNode',
            description: 'Tooltip text to be shown on hover/tap'
          },
          variant: {
            type: `'outlined' | 'contained' | 'text'`,
            default: `'text'`,
            description: 'The style variant of the status indicator.'
          }
        }
      }}
    />
  );
};

export default StatusIndicatorModule;
