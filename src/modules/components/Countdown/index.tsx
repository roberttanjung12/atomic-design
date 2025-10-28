import { Countdown, DocView } from '@/@dront/components';
import CountdownBasic from './CountdownBasic';
import basicExampleCode from './CountdownBasic?raw';
import CountdownBlock from './CountdownBlock';
import blockExampleCode from './CountdownBlock?raw';
import CountdownBlockDirection from './CountdownBlockDirection';
import blockDirectionExampleCode from './CountdownBlockDirection?raw';
import CountdownCompact from './CountdownCompact';
import compactExampleCode from './CountdownCompact?raw';
import CountdownIdentifier from './CountdownIdentifier';
import identifierExampleCode from './CountdownIdentifier?raw';
import CountdownOnOver from './CountdownOnOver';
import onOverExampleCode from './CountdownOnOver?raw';
import CountdownRender from './CountdownRender';
import renderExampleCode from './CountdownRender?raw';
import CountdownSeparator from './CountdownSeparator';
import separatorExampleCode from './CountdownSeparator?raw';
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
          title: 'Separator',
          descriptions:
            'Customize the character used to separate each countdown segment. By default, the separator is a colon (":"). You can replace it with any symbol, text, or even an empty string to match your desired style.',
          example: <CountdownSeparator />,
          exampleCode: separatorExampleCode
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
          title: 'Identifier',
          descriptions:
            'The `identifier` prop allows you to customize which time segments are displayed and how they are accumulated. You can specify segments using identifiers like `d`, `h`, `m`, and `s`, separated by commas (e.g., `"h,m"` or `"d,h,m"`). The countdown automatically adjusts values based on the selected segments, for example, if `d` is omitted, hours will be shown as the total accumulated value.',
          example: <CountdownIdentifier />,
          exampleCode: identifierExampleCode
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
        },
        {
          title: 'Custom Render',
          descriptions:
            'Provides flexibility to display different elements during and after the countdown. When `countingElement` is provided, it will be shown while the countdown is running. Once the countdown finishes, the component will render its children instead, allowing you to easily define post-countdown content.',
          example: <CountdownRender />,
          exampleCode: renderExampleCode
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
            default: 'minimal'
          },
          direction: {
            type: "'vertical' | 'horizontal'",
            description:
              'Defines the layout direction of the countdown. `vertical` stacks the time units, while `horizontal` arranges them side by side.',
            default: 'vertical'
          },
          separator: {
            type: 'string',
            description:
              "Custom separator displayed between time units (e.g., ':', '/', or '·'). Ignored when using the `block` variant.",
            default: ':'
          },
          size: {
            type: "number | 'small' | 'medium' | 'large'",
            description:
              'Controls the font size of the countdown. You can use predefined sizes (`small`, `medium`, `large`) or provide a custom numeric value for fine-grained control.',
            default: 'medium'
          },
          spacing: {
            type: 'number',
            description:
              'Adjusts the spacing between time units. Useful for controlling visual density, especially in compact layouts.',
            default: '0.2'
          },
          showDays: {
            type: 'boolean',
            description:
              'Determines whether to include the day unit in the countdown. Set to false to hide days and display only hours, minutes, and seconds.',
            default: 'true'
          },
          identifier: {
            type: 'string',
            description:
              'Specifies which time segments to display in the countdown. Use comma-separated identifiers such as "d,h,m" or "h,m,s" to control which units appear and how they are accumulated.'
          },
          showOnly: {
            type: "'day' | 'hour' | 'min' | 'sec'",
            description:
              'Determines which single time segment to display by converting the total remaining time into that unit. For example, setting it to `hour` will show the total hours left instead of splitting into days, minutes, and seconds.'
          },
          countingElement: {
            type: 'ReactNode',
            description:
              "Element to display while the countdown is active. Once the countdown finishes, this element is replaced by the component's children, which represent the finished state."
          },
          sx: {
            type: 'SxProps<Theme>',
            description: 'Applies custom styles to the main countdown container.'
          },
          numberSx: {
            type: 'SxProps<Theme>',
            description: 'Applies global styles to all number elements in the countdown.'
          },
          labelSx: {
            type: 'SxProps<Theme>',
            description: 'Applies global styles to all label elements in the countdown.'
          },
          dayNumberSx: {
            type: 'SxProps<Theme>',
            description: 'Applies styles specifically to the day number element.'
          },
          dayLabelSx: {
            type: 'SxProps<Theme>',
            description: 'Applies styles specifically to the day label element.'
          },
          hourNumberSx: {
            type: 'SxProps<Theme>',
            description: 'Applies styles specifically to the hour number element.'
          },
          hourLabelSx: {
            type: 'SxProps<Theme>',
            description: 'Applies styles specifically to the hour label element.'
          },
          minNumberSx: {
            type: 'SxProps<Theme>',
            description: 'Applies styles specifically to the minute number element.'
          },
          minLabelSx: {
            type: 'SxProps<Theme>',
            description: 'Applies styles specifically to the minute label element.'
          },
          secNumberSx: {
            type: 'SxProps<Theme>',
            description: 'Applies styles specifically to the second number element.'
          },
          secLabelSx: {
            type: 'SxProps<Theme>',
            description: 'Applies styles specifically to the second label element.'
          },
          onOver: {
            type: '() => void',
            description:
              'Callback function triggered when the countdown reaches zero. Useful for handling post-countdown actions such as showing alerts, refreshing data, or changing UI states.'
          },
          children: {
            type: 'ReactNode',
            description:
              'Content to display when the countdown has finished. This element will automatically replace the "countingElement" once the countdown reaches zero, allowing you to define what appears after completion.'
          }
        }
      }}
    />
  );
};

export default CountdownModule;
