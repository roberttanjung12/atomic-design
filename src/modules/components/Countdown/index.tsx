// GanttChartModule.tsx

import { Countdown, DocView } from '@/@dront/components';
import CountdownBasic from './CountdownBasic';
import basicExampleCode from './CountdownBasic?raw';
import CountdownBlock from './CountdownBlock';
import blockExampleCode from './CountdownBlock?raw';
import CountdownBlockDirection from './CountdownBlockDirection';
import blockDirectionExampleCode from './CountdownBlockDirection?raw';
import CountdownCompact from './CountdownCompact';
import compactExampleCode from './CountdownCompact?raw';
import CountdownShowDay from './CountdownShowDay';
import showDayExampleCode from './CountdownShowDay?raw';
import CountdownSize from './CountdownSize';
import sizeExampleCode from './CountdownSize?raw';
import CountdownSpacing from './CountdownSpacing';
import spacingExampleCode from './CountdownSpacing?raw';

const CountdownModule = () => {
  return (
    <DocView
      contributors={['Rafli Rai Rizky']}
      overview=""
      sections={[
        {
          title: 'Basic',
          descriptions: 'Default countdown output',
          example: <CountdownBasic />,
          exampleCode: basicExampleCode
        },
        {
          title: 'Compact',
          descriptions: 'A more compact version of the countdown, ideal for small spaces.',
          example: <CountdownCompact />,
          exampleCode: compactExampleCode
        },
        {
          title: 'Block',
          descriptions: 'Block-style countdown with large, easy-to-read digits.',
          example: <CountdownBlock />,
          exampleCode: blockExampleCode
        },
        {
          title: 'Block (Direction)',
          descriptions: 'Demonstrates the countdown direction: vertical or horizontal.',
          example: <CountdownBlockDirection />,
          exampleCode: blockDirectionExampleCode
        },
        {
          title: 'Size',
          descriptions: 'Adjust the size of the countdown: small, medium, or large.',
          example: <CountdownSize />,
          exampleCode: sizeExampleCode
        },
        {
          title: 'Spacing',
          descriptions: 'Control the spacing between digits or blocks in the countdown.',
          example: <CountdownSpacing />,
          exampleCode: spacingExampleCode
        },
        {
          title: 'Show Day',
          descriptions: 'Display the number of days remaining before the target date.',
          example: <CountdownShowDay />,
          exampleCode: showDayExampleCode
        }
      ]}
      propsDoc={{
        component: Countdown,
        propDefinitions: {
          targetDate: {
            type: 'Date',
            description: 'Target date and time for the countdown.',
            required: true
          },
          variant: {
            type: "'minimal' | 'compact' | 'block'",
            description: 'Visual style of the countdown.',
            required: false,
            default: 'minimal'
          },
          direction: {
            type: "'vertical' | 'horizontal'",
            description: 'Direction of the countdown digits: vertical (default) or horizontal.',
            required: false,
            default: 'vertical'
          },
          separator: {
            type: 'string',
            description: 'Character used to separate time units (e.g., ":" or "-").',
            required: false,
            default: ':'
          },
          size: {
            type: "number | 'small' | 'medium' | 'large'",
            description: "Size of the countdown display, can custom number or 'small', 'mediume', 'large'",
            required: false,
            default: 'medium'
          },
          spacing: {
            type: 'number',
            description: 'Spacing between digits or blocks in the countdown.',
            required: false,
            default: '0.2'
          },
          showDays: {
            type: 'boolean',
            description: 'Show the number of days remaining before the countdown.',
            default: 'false'
          }
        }
      }}
    />
  );
};

export default CountdownModule;
