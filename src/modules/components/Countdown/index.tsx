import { Countdown, DocView } from '@/@dront/components';
import CountdownBasic from './CountdownBasic';
import basicExampleCode from './CountdownBasic?raw';
import CountdownBlock from './CountdownBlock';
import blockExampleCode from './CountdownBlock?raw';
import CountdownBlockDirection from './CountdownBlockDirection';
import blockDirectionExampleCode from './CountdownBlockDirection?raw';
import CountdownCompact from './CountdownCompact';
import compactExampleCode from './CountdownCompact?raw';
import CountdownOnOver from './CountdownOnOver';
import onOverExampleCode from './CountdownOnOver?raw';
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
      overview="A flexible and customizable countdown component that displays the remaining time until a specific target date. It supports multiple visual styles (`minimal`, `compact`, `block`), layout directions (`vertical`, `horizontal`), and adjustable spacing or sizing. You can also define whether to show days and trigger a custom callback when the countdown is over."
      sections={[
        {
          title: 'Basic',
          descriptions:
            'The most straightforward usage of the Countdown component. Displays a default vertical countdown using the minimal variant, showing days, hours, minutes, and seconds automatically updating every second.',
          example: <CountdownBasic />,
          exampleCode: basicExampleCode
        },
        {
          title: 'Compact',
          descriptions:
            'A smaller and condensed version designed for limited spaces. The compact variant uses single-character labels for each unit (e.g., h, m, s) and places them beside their respective numbers for a streamlined appearance.',
          example: <CountdownCompact />,
          exampleCode: compactExampleCode
        },
        {
          title: 'Block',
          descriptions:
            'The block variant displays each time segment in distinct blocks, with numbers and labels clearly separated. This layout is ideal for dashboards or interfaces where visual clarity is important.',
          example: <CountdownBlock />,
          exampleCode: blockExampleCode
        },
        {
          title: 'Block (Direction)',
          descriptions:
            'Demonstrates the flexibility of the block variant when changing direction between vertical and horizontal layouts. The `direction` prop allows you to align the countdown either in a column or row, depending on your layout needs.',
          example: <CountdownBlockDirection />,
          exampleCode: blockDirectionExampleCode
        },
        {
          title: 'Size',
          descriptions:
            'Adjusts the visual size of the countdown display. You can use predefined sizes (`small`, `medium`, `large`) or provide a custom numeric value (e.g., 42) to directly control the font size of the timer.',
          example: <CountdownSize />,
          exampleCode: sizeExampleCode
        },
        {
          title: 'Spacing',
          descriptions:
            'Controls the spacing between each time segment. This is useful when integrating the countdown into different layouts or when aligning it with other visual elements.',
          example: <CountdownSpacing />,
          exampleCode: spacingExampleCode
        },
        {
          title: 'Hide Days',
          descriptions:
            'Toggles the visibility of the day segment using the `showDays` prop. When disabled, the countdown merges the total days into the hour count, providing a cleaner look for short-duration timers.',
          example: <CountdownShowDay />,
          exampleCode: showDayExampleCode
        },
        {
          title: 'Handle when Countdown Over',
          descriptions:
            'Shows how to use the `onOver` callback, which is triggered automatically once the countdown reaches zero. You can use this callback to execute custom logic such as triggering notifications, animations, or refreshing data.',
          example: <CountdownOnOver />,
          exampleCode: onOverExampleCode
        }
      ]}
      propsDoc={{
        component: Countdown,
        propDefinitions: {
          targetDate: {
            type: 'Date',
            description:
              'The target date and time to count down to. The countdown will continuously update until this date is reached.',
            required: true
          },
          variant: {
            type: "'minimal' | 'compact' | 'block'",
            description:
              'Determines the visual style of the countdown display. Use `minimal` for a clean inline look, `compact` for a space-saving format, or `block` for a segmented card-like style.',
            required: false,
            default: 'minimal'
          },
          direction: {
            type: "'vertical' | 'horizontal'",
            description:
              'Defines the layout direction of the countdown. `vertical` stacks the time units, while `horizontal` arranges them side by side.',
            required: false,
            default: 'vertical'
          },
          separator: {
            type: 'string',
            description:
              "Custom separator displayed between time units (e.g., ':', '/', or '·'). Ignored when using the `block` variant.",
            required: false,
            default: ':'
          },
          size: {
            type: "number | 'small' | 'medium' | 'large'",
            description:
              'Controls the font size of the countdown. You can use predefined sizes (`small`, `medium`, `large`) or provide a custom numeric value for fine-grained control.',
            required: false,
            default: 'medium'
          },
          spacing: {
            type: 'number',
            description:
              'Adjusts the spacing between time units. Useful for controlling visual density, especially in compact layouts.',
            required: false,
            default: '0.2'
          },
          showDays: {
            type: 'boolean',
            description:
              'Determines whether to include the day unit in the countdown. Set to false to hide days and display only hours, minutes, and seconds.',
            required: false,
            default: 'true'
          },
          onOver: {
            type: '() => void',
            description:
              'Callback function triggered when the countdown reaches zero. Useful for handling post-countdown actions such as showing alerts, refreshing data, or changing UI states.',
            required: false,
            default: 'false'
          }
        }
      }}
    />
  );
};

export default CountdownModule;
