import { DocView, Timeline } from '@/@dront/components';
import TimelineActive from './TimelineActive';
import activeExampleCode from './TimelineActive?raw';
import TimelineBasic from './TimelineBasic';
import basicExampleCode from './TimelineBasic?raw';
import TimelineConnector from './TimelineConnector';
import connectorExampleCode from './TimelineConnector?raw';
import TimelineDisabled from './TimelineDisabled';
import disabledExampleCode from './TimelineDisabled?raw';
import TimelineDotColor from './TimelineDotColor';
import dotColorExampleCode from './TimelineDotColor?raw';
import TimelineDotOutlined from './TimelineDotOutlined';
import dotOutlinedExampleCode from './TimelineDotOutlined?raw';
import TimelineIcon from './TimelineIcon';
import iconExampleCode from './TimelineIcon?raw';
import TimelineOpposite from './TimelineOpposite';
import oppositeExampleCode from './TimelineOpposite?raw';
import TimelinePositionAlternate from './TimelinePositionAlternate';
import positionAlternateExampleCode from './TimelinePositionAlternate?raw';
import TimelinePositionAlternateReverse from './TimelinePositionAlternateReverse';
import positionAlternateReverseExampleCode from './TimelinePositionAlternateReverse?raw';
import TimelinePositionLeft from './TimelinePositionLeft';
import positionLeftExampleCode from './TimelinePositionLeft?raw';

const TimelineModule = () => {
  return (
    <DocView
      contributors={['Rafli Rai Rizky']}
      overview="The Timeline component visually represents a sequence of events or steps in chronological order. It supports customizable positions (`left`, `right`, `alternate`), dot styles, and connector variants. Ideal for showcasing progress, historical data, or process flows in a structured and interactive layout."
      sections={[
        {
          title: 'Basic',
          descriptions: 'Demonstrates a simple timeline with default right-side alignment.',
          example: <TimelineBasic />,
          exampleCode: basicExampleCode
        },
        {
          title: 'Position Left',
          descriptions: 'Displays all timeline items aligned to the left side for a clean, single-column layout.',
          example: <TimelinePositionLeft />,
          exampleCode: positionLeftExampleCode
        },
        {
          title: 'Position Alternate',
          descriptions: 'Alternates timeline items between the left and right sides for better visual balance.',
          example: <TimelinePositionAlternate />,
          exampleCode: positionAlternateExampleCode
        },
        {
          title: 'Position Alternate Reverse',
          descriptions:
            'Similar to the alternate layout but starts from the opposite side, reversing the order of alignment.',
          example: <TimelinePositionAlternateReverse />,
          exampleCode: positionAlternateReverseExampleCode
        },
        {
          title: 'Opposite',
          descriptions: 'Adds opposite content beside each timeline item to display complementary information.',
          example: <TimelineOpposite />,
          exampleCode: oppositeExampleCode
        },
        {
          title: 'Dot Color',
          descriptions:
            'Shows how to customize the color of timeline dots to represent different statuses or categories.',
          example: <TimelineDotColor />,
          exampleCode: dotColorExampleCode
        },
        {
          title: 'Dot Outlined',
          descriptions: 'Uses outlined dots instead of filled ones for a minimalist appearance.',
          example: <TimelineDotOutlined />,
          exampleCode: dotOutlinedExampleCode
        },
        {
          title: 'Connector',
          descriptions: 'Demonstrates the use of solid or dashed connector lines between timeline items.',
          example: <TimelineConnector />,
          exampleCode: connectorExampleCode
        },
        {
          title: 'Active',
          descriptions: 'Highlights an active timeline item to indicate the current or completed step.',
          example: <TimelineActive />,
          exampleCode: activeExampleCode
        },
        {
          title: 'Disabled',
          descriptions: 'Displays disabled timeline items to represent inactive or unavailable steps.',
          example: <TimelineDisabled />,
          exampleCode: disabledExampleCode
        },
        {
          title: 'Icon',
          descriptions: 'Shows how to use icons inside timeline dots for visual emphasis or event categorization.',
          example: <TimelineIcon />,
          exampleCode: iconExampleCode
        }
      ]}
      propsDoc={{
        component: Timeline,
        propDefinitions: {
          data: {
            type: 'TimelineData[]',
            description:
              'An array of timeline items containing details such as `content`, `opposite`, `disabled`, `dotIcon`, or `color` settings for each event.',
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

export default TimelineModule;
