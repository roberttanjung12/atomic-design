import { DocView, TimelineTree } from '@/@dront/components';
import TimelineTreeActive from './TimelineTreeActive';
import activeExampleCode from './TimelineTreeActive?raw';
import TimelineTreeBasic from './TimelineTreeBasic';
import basicExampleCode from './TimelineTreeBasic?raw';
import TimelineTreeConnector from './TimelineTreeConnector';
import connectorExampleCode from './TimelineTreeConnector?raw';
import TimelineTreecontent from './TimelineTreeContent';
import contentExampleCode from './TimelineTreeContent?raw';
import TimelineTreeDisabled from './TimelineTreeDisabled';
import disabledExampleCode from './TimelineTreeDisabled?raw';
import TimelineTreeDotColor from './TimelineTreeDotColor';
import dotColorExampleCode from './TimelineTreeDotColor?raw';
import TimelineTreeDotOutlined from './TimelineTreeDotOutlined';
import dotOutlinedExampleCode from './TimelineTreeDotOutlined?raw';
import TimelineTreeIcon from './TimelineTreeIcon';
import iconExampleCode from './TimelineTreeIcon?raw';
import TimelineTreeOpposite from './TimelineTreeOpposite';
import oppositeExampleCode from './TimelineTreeOpposite?raw';
import TimelineTreePositionAlternate from './TimelineTreePositionAlternate';
import positionAlternateExampleCode from './TimelineTreePositionAlternate?raw';
import TimelineTreePositionAlternateReverse from './TimelineTreePositionAlternateReverse';
import positionAlternateReverseExampleCode from './TimelineTreePositionAlternateReverse?raw';
import TimelineTreePositionLeft from './TimelineTreePositionLeft';
import positionLeftExampleCode from './TimelineTreePositionLeft?raw';

const TimelineTreeModule = () => {
  return (
    <DocView
      contributors={['Rafli Rai Rizky']}
      overview="The Timeline component visually represents a sequence of events or steps in chronological order. It supports customizable positions (`left`, `right`, `alternate`), dot styles, and connector variants. Ideal for showcasing progress, historical data, or process flows in a structured and interactive layout."
      sections={[
        {
          title: 'Basic',
          descriptions: 'Demonstrates a simple timeline with default right-side alignment.',
          example: <TimelineTreeBasic />,
          exampleCode: basicExampleCode
        },
        {
          title: 'Position Left',
          descriptions: 'Displays all timeline items aligned to the left side for a clean, single-column layout.',
          example: <TimelineTreePositionLeft />,
          exampleCode: positionLeftExampleCode
        },
        {
          title: 'Position Alternate',
          descriptions: 'Alternates timeline items between the left and right sides for better visual balance.',
          example: <TimelineTreePositionAlternate />,
          exampleCode: positionAlternateExampleCode
        },
        {
          title: 'Position Alternate Reverse',
          descriptions:
            'Similar to the alternate layout but starts from the opposite side, reversing the order of alignment.',
          example: <TimelineTreePositionAlternateReverse />,
          exampleCode: positionAlternateReverseExampleCode
        },
        {
          title: 'Opposite',
          descriptions: 'Adds opposite content beside each timeline item to display complementary information.',
          example: <TimelineTreeOpposite />,
          exampleCode: oppositeExampleCode
        },
        {
          title: 'Content',
          descriptions:
            'Demonstrates the TimelineTree component using data that includes both a mandatory `title` and an additional `content` field. Each of these fields supports either a `string` or a `ReactNode`, allowing flexible customization such as plain text or JSX elements for display.',
          example: <TimelineTreecontent />,
          exampleCode: contentExampleCode
        },
        {
          title: 'Dot Color',
          descriptions:
            'Shows how to customize the color of timeline dots to represent different statuses or categories.',
          example: <TimelineTreeDotColor />,
          exampleCode: dotColorExampleCode
        },
        {
          title: 'Dot Outlined',
          descriptions: 'Uses outlined dots instead of filled ones for a minimalist appearance.',
          example: <TimelineTreeDotOutlined />,
          exampleCode: dotOutlinedExampleCode
        },
        {
          title: 'Connector',
          descriptions: 'Demonstrates the use of solid or dashed connector lines between timeline items.',
          example: <TimelineTreeConnector />,
          exampleCode: connectorExampleCode
        },
        {
          title: 'Active',
          descriptions: 'Highlights an active timeline item to indicate the current or completed step.',
          example: <TimelineTreeActive />,
          exampleCode: activeExampleCode
        },
        {
          title: 'Disabled',
          descriptions: 'Displays disabled timeline items to represent inactive or unavailable steps.',
          example: <TimelineTreeDisabled />,
          exampleCode: disabledExampleCode
        },
        {
          title: 'Icon',
          descriptions: 'Shows how to use icons inside timeline dots for visual emphasis or event categorization.',
          example: <TimelineTreeIcon />,
          exampleCode: iconExampleCode
        }
      ]}
      propsDoc={{
        component: TimelineTree,
        propDefinitions: {
          data: {
            type: 'TimelineData[]',
            description:
              'An array of timeline items containing details such as `title`, `content`, `disabled`, `dotIcon`, or `color` settings for each event.',
            required: true
          },
          position: {
            type: "'left' | 'right' | 'alternate' | 'alternate-reverse'",
            description:
              'Determines the alignment of timeline items. Use `left` or `right` for a single-side layout, or `alternate`/`alternate-reverse` for items alternating sides.',
            default: 'right'
          },
          dot: {
            type: 'OptionsDot',
            description: 'Defines the appearance of timeline dots, such as `color`, or `outlined`.'
          },
          connectorVariant: {
            type: "'solid' | 'dashed'",
            description:
              'Sets the style of the connector line between timeline items. Use `solid` for a continuous line or `dashed` for a segmented one.',
            default: 'solid'
          }
        }
      }}
    />
  );
};

export default TimelineTreeModule;
