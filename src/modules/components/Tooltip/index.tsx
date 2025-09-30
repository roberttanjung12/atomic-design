import { DocView } from '@/@dront/components';
import Tooltip from '@/@dront/components/Tooltip';
import TooltipBasic from './TooltipBasic';
import tooltipBasicCode from './TooltipBasic?raw';
import TooltipCustomIcon from './TooltipCustomIcon';
import tooltipCustomIconCode from './TooltipCustomIcon?raw';
import TooltipIcon from './TooltipIcon';
import tooltipIconCode from './TooltipIcon?raw';
import TooltipPlacement from './TooltipPlacement';
import tooltipPlacementCode from './TooltipPlacement?raw';

const TooltipComp = () => {
  return (
    <DocView
      contributors={['Nanda Yusuf Nur Pratama']}
      overview={
        "The `Tooltip` component is a customizable tooltip built on top of Material UI's Tooltip. It provides a flexible way to display rich content on hover or focus, with options for a standalone informational icon or wrapping around child elements. Perfect for providing contextual help and additional information without cluttering the interface."
      }
      sections={[
        {
          title: 'Basic',
          descriptions:
            'This example demonstrates the basic usage of the `Tooltip` component wrapping a child element. The tooltip displays a title and descriptive content when the user hovers over or focuses on the wrapped element. This is the primary use case for attaching contextual help to interactive elements like buttons, links, or form fields.',
          example: <TooltipBasic />,
          exampleCode: tooltipBasicCode
        },
        {
          title: 'With Icon',
          descriptions:
            'The `Tooltip` component can function as a standalone informational icon when no children are provided. This renders a default info icon that displays the tooltip content on hover, making it useful for providing inline context or help text without needing to wrap another element.',
          example: <TooltipIcon />,
          exampleCode: tooltipIconCode
        },
        {
          title: 'Placement Options',
          descriptions:
            'The `placement` prop allows you to control where the tooltip appears relative to its target element. This example shows various placement options including top, right, bottom, and left positions, helping you choose the best positioning for your layout.',
          example: <TooltipPlacement />,
          exampleCode: tooltipPlacementCode
        },
        {
          title: 'Custom Icons',
          descriptions:
            'When using the tooltip as a standalone icon, you can customize the icon using the `icon` prop. This allows you to use different icons that better represent the type of information being displayed, such as help, warning, or premium feature indicators.',
          example: <TooltipCustomIcon />,
          exampleCode: tooltipCustomIconCode
        }
      ]}
      propsDoc={{
        component: Tooltip,
        propDefinitions: {
          title: {
            type: 'string | ReactNode',
            description:
              'The main heading text displayed at the top of the tooltip content. Can be a string or any React node for rich content.'
          },
          content: {
            type: 'string | ReactNode',
            description:
              'The main body content of the tooltip displayed below the title. Can be a string or any React node for rich content.'
          },
          icon: {
            type: 'ReactNode',
            description:
              "Optional custom icon to display when no children are provided. If not specified, defaults to Material UI's Info icon."
          },
          placement: {
            type: 'TooltipProps["placement"]',
            description:
              'Position of the tooltip relative to its target element. Accepts all Material UI Tooltip placement values like "top", "bottom", "left", "right", and their variations.',
            default: 'bottom'
          },
          children: {
            type: 'ReactNode',
            description:
              'Optional React node to wrap with the tooltip. When provided, the tooltip will be attached to this element. If not provided, the component renders as a standalone informational icon.'
          }
        }
      }}
    />
  );
};

export default TooltipComp;
