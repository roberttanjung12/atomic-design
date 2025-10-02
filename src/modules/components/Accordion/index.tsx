import Accordion from '@dront/ui/Accordion';
import { DocView } from '@/@dront/components';
import AccordionBasic from './AccordionBasic';
import accordionBasicCode from './AccordionBasic?raw';
import AccordionOutlined from './AccordionOutlined';
import accordionOutlinedCode from './AccordionOutlined?raw';
import AccordionWithActions from './AccordionWithActions';
import accordionWithActionsCode from './AccordionWithActions?raw';

const AccordionModule = () => {
  return (
    <DocView
      contributors={['Robert Tanjung']}
      overview={
        'The `Accordion` component is a collapsible content container that allows users to toggle the visibility of sections. It supports multiple items, custom styling variants, and optional action buttons for enhanced user interaction.'
      }
      sections={[
        {
          title: 'Basic',
          descriptions:
            "This example demonstrates a basic accordion with the default 'contained' variant. It features a clean design with a primary background color and expandable sections that reveal detailed content when clicked.",
          example: <AccordionBasic />,
          exampleCode: accordionBasicCode
        },
        {
          title: 'Outlined Variant',
          descriptions:
            "This example shows the accordion using the 'outlined' variant. It provides a more minimal appearance with transparent background and border styling, suitable for interfaces that require a lighter visual treatment.",
          example: <AccordionOutlined />,
          exampleCode: accordionOutlinedCode
        },
        {
          title: 'With Actions',
          descriptions:
            'This example demonstrates an accordion with action buttons in the accordion items. Actions provide additional functionality like edit, delete, or other operations that can be performed on each accordion item.',
          example: <AccordionWithActions />,
          exampleCode: accordionWithActionsCode
        }
      ]}
      propsDoc={{
        component: Accordion,
        propDefinitions: {
          id: {
            type: 'string',
            default: 'accordion',
            description: 'Unique id for the accordion.'
          },
          list: {
            type: 'AccordionItem[]',
            description: 'List of accordion items.'
          },
          variant: {
            type: "'contained' | 'outlined'",
            default: 'contained',
            description: 'Accordion style variant.'
          },
          accordion: {
            type: "Omit<AccordionProps, 'children'>",
            description: 'Props for the MUI Accordion component.'
          },
          summary: {
            type: "Omit<AccordionSummaryProps, 'children'>",
            description: 'Props for the MUI AccordionSummary component.'
          },
          details: {
            type: "Omit<AccordionDetailsProps, 'children'>",
            description: 'Props for the MUI AccordionDetails component.'
          },
          actions: {
            type: 'AccordionActionsProps',
            description: 'Props for the MUI AccordionActions component.'
          }
        }
      }}
    />
  );
};

export default AccordionModule;
