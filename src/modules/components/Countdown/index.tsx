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
import CountdownShowOnly from './CountdownShowOnly';
import showOnlyExampleCode from './CountdownShowOnly?raw';
import CountdownSize from './CountdownSize';
import sizeExampleCode from './CountdownSize?raw';
import CountdownSpacing from './CountdownSpacing';
import spacingExampleCode from './CountdownSpacing?raw';
import CountdownStyling from './CountdownStyling';
import stylingExampleCode from './CountdownStyling?raw';

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
          title: 'Show by Segment',
          descriptions:
            'Display the countdown in a single time segment by accumulating all remaining time into days, hours, minutes, or seconds. The `showOnly` prop supports values `day`, `hour`, `min`, or `sec`, and works seamlessly across all variants `minimal`, `compact`, and `block`.',
          example: <CountdownShowOnly />,
          exampleCode: showOnlyExampleCode
        },
        {
          title: 'Styling',
          descriptions:
            'You can style the countdown easily using multiple sx props. Use `sx` to style the main container, `numberSx` and `labelSx` for global number and label styles, or apply more specific styling with `dayNumberSx`, `dayLabelSx`, `hourNumberSx`, `hourLabelSx`, `minNumberSx`, `minLabelSx`, `secNumberSx`, and `secLabelSx` for full control over each time unit.',
          example: <CountdownStyling />,
          exampleCode: stylingExampleCode
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
          showOnly: {
            type: "'day' | 'hour' | 'min' | 'sec'",
            description:
              'Determines which single time segment to display by converting the total remaining time into that unit. For example, setting it to `hour` will show the total hours left instead of splitting into days, minutes, and seconds.',
            required: false
          },
          sx: {
            type: 'SxProps<Theme>',
            description: 'Applies custom styles to the main countdown container.',
            required: false
          },
          numberSx: {
            type: 'SxProps<Theme>',
            description: 'Applies global styles to all number elements in the countdown.',
            required: false
          },
          labelSx: {
            type: 'SxProps<Theme>',
            description: 'Applies global styles to all label elements in the countdown.',
            required: false
          },
          dayNumberSx: {
            type: 'SxProps<Theme>',
            description: 'Applies styles specifically to the day number element.',
            required: false
          },
          dayLabelSx: {
            type: 'SxProps<Theme>',
            description: 'Applies styles specifically to the day label element.',
            required: false
          },
          hourNumberSx: {
            type: 'SxProps<Theme>',
            description: 'Applies styles specifically to the hour number element.',
            required: false
          },
          hourLabelSx: {
            type: 'SxProps<Theme>',
            description: 'Applies styles specifically to the hour label element.',
            required: false
          },
          minNumberSx: {
            type: 'SxProps<Theme>',
            description: 'Applies styles specifically to the minute number element.',
            required: false
          },
          minLabelSx: {
            type: 'SxProps<Theme>',
            description: 'Applies styles specifically to the minute label element.',
            required: false
          },
          secNumberSx: {
            type: 'SxProps<Theme>',
            description: 'Applies styles specifically to the second number element.',
            required: false
          },
          secLabelSx: {
            type: 'SxProps<Theme>',
            description: 'Applies styles specifically to the second label element.',
            required: false
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
