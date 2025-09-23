import { DocView } from '@/@dront/components';
import TimeMachine from '@/@dront/components/TimeMachine';
import DatePickerExample from './DatePickerExample';
import datePickerExample from './DatePickerExample?raw';
import DatePickerFilterExample from './DatePickerFilterExample';
import datePickerFilterExample from './DatePickerFilterExample?raw';
import DateRangeExample from './DateRangeExample';
import dateRangeExample from './DateRangeExample?raw';
import DateRangeFilterExample from './DateRangeFilterExample';
import dateRangeFilterExample from './DateRangeFilterExample?raw';
import DateRangeTwoMonthsDisplayedExample from './DateRangeTwoMonthsDisplayedExample';
import dateRangeTwoMonthsDisplayedExample from './DateRangeTwoMonthsDisplayedExample?raw';
import DateRangeTwoMonthsDisplayedFilterExample from './DateRangeTwoMonthsDisplayedFilterExample';
import dateRangeTwoMonthsDisplayedFilterExample from './DateRangeTwoMonthsDisplayedFilterExample?raw';
import QuarterPickerExample from './QuarterPickerExample';
import quarterPickerExample from './QuarterPickerExample?raw';
import QuarterPickerFilterExample from './QuarterPickerFilterExample';
import quarterPickerFilterExample from './QuarterPickerFilterExample?raw';
import TimeRangePickerExample from './TimeRangePickerExample';
import timeRangePickerExample from './TimeRangePickerExample?raw';
import TimeRangePickerFilterExample from './TimeRangePickerFilterExample';
import timeRangePickerFilterExample from './TimeRangePickerFilterExample?raw';
import UltimatePickerExample from './UltimatePickerExample';
import ultimatePickerExample from './UltimatePickerExample?raw';
import UltimatePickerFilterExample from './UltimatePickerFilterExample';
import ultimatePickerFilterExample from './UltimatePickerFilterExample?raw';

const TimeMachineModule = () => {
  return (
    <DocView
      contributors={['Agmar Putra']}
      overview="The `TimeMachine` component is a reusable date-picker component integrated with `react-datepicker` so developers can easily use this component without worrying about styles and complex integration."
      sections={[
        {
          title: 'Date Picker',
          descriptions: [
            "`TimeMachine` with the `date-picker` variant allows users to select a single date from an interactive calendar interface. The user's choice is confirmed via an `Apply` action, making it a controlled component ideal for forms and scheduling.",
            'Hint: If you change the language, the date format will also change accordingly.'
          ],
          example: <DatePickerExample />,
          exampleCode: datePickerExample
        },
        {
          title: 'Date Picker (Filter)',
          descriptions:
            "In filter mode, `TimeMachine` integrates directly with the URL. Set the `isFilter` prop to enable this mode. Use the `filter` prop for configuration, where the name property `(e.g., { name: 'dp-query' })` defines the name of the URL query parameter. The component will automatically read from and write to this parameter when the user applies or clears the filter, eliminating the need for state handling in the parent component.",
          example: <DatePickerFilterExample />,
          exampleCode: datePickerFilterExample
        },
        {
          title: 'Date Range',
          descriptions:
            'This example demonstrates how to use the `TimeMachine` component to select a `date` and `time` range. By setting the variant prop to `date-range` and including the `showTime` prop, the component renders an advanced interface for picking both a start and end date, complete with time selection for each.',
          example: <DateRangeExample />,
          exampleCode: dateRangeExample
        },
        {
          title: 'Date Range (Filter)',
          descriptions:
            "Similar to the `single-date` filter, the `date-range` variant operates as a self-contained component that integrates directly with the URL. The key difference lies in the `filter` prop's configuration, which requires two properties instead of one: `startName` for the start date's query parameter and `endName` for the end date's parameter. This allows the component to automatically read from and write to two separate URL parameters, such as `?dr-start=...&dr-end=....` The inclusion of the `showTime` prop further enhances this by adding time values to the filter, providing higher precision for time-sensitive range filtering.",
          example: <DateRangeFilterExample />,
          exampleCode: dateRangeFilterExample
        },
        {
          title: 'Date Range Two Months Displayed',
          descriptions:
            "This is a controlled component that uses the `variant='date-range-two-months'` to render a date range picker that always displays two calendar months side-by-side, making it easier to select ranges that span across months.",
          example: <DateRangeTwoMonthsDisplayedExample />,
          exampleCode: dateRangeTwoMonthsDisplayedExample
        },
        {
          title: 'Date Range Two Months Displayed (Filter)',
          descriptions:
            'This is a self-contained date range filter that displays two calendar months simultaneously. It automatically manages the selected range by updating the URL with `drtm-start` and `drtm-end` query parameters.',
          example: <DateRangeTwoMonthsDisplayedFilterExample />,
          exampleCode: dateRangeTwoMonthsDisplayedFilterExample
        },
        {
          title: 'Time Range Picker',
          descriptions:
            'This example demonstrates how to use the TimeMachine component specifically for selecting a time range. By setting the variant prop to `time-range`, the component renders an interface focused exclusively on choosing a start and end time `(e.g., 9:00 to 17:00)`, without displaying a calendar.',
          example: <TimeRangePickerExample />,
          exampleCode: timeRangePickerExample
        },
        {
          title: 'Time Range Picker (Filter)',
          descriptions:
            'This component acts as a time range filter that integrates directly with the URL, using `dp-start-time` and `dp-end-time` as the query parameter names for the start and end times.',
          example: <TimeRangePickerFilterExample />,
          exampleCode: timeRangePickerFilterExample
        },
        {
          title: 'Quarter Picker',
          descriptions:
            "This component uses the `variant='quarter-picker'` to allow users to select a quarter, such as `Q1 2025`.",
          example: <QuarterPickerExample />,
          exampleCode: quarterPickerExample
        },
        {
          title: 'Quarter Picker (Filter)',
          descriptions:
            'This component is a self-contained filter for a quarter range that automatically updates the URL with `qp-start` and `qp-end` query parameters.',
          example: <QuarterPickerFilterExample />,
          exampleCode: quarterPickerFilterExample
        },
        {
          title: 'Ultimate Picker',
          descriptions:
            "This component demonstrates TimeMachine with `variant='ultimate'`, a comprehensive date picker controlled by a single state object of type `DateValueWithMode`. This object consists of a `mode` property that defines the selection type (such as `daily`, `weekly`, `monthly`, `quarter`, `yearly`, or `custom-range`) and a value property that holds the actual date value. The entire state object is passed to the date prop and updated via the `onApply` callback, which returns a new `{ mode, value }` object each time the user applies a selection. The `showTime` prop specifically adds time selection functionality to the 'custom-range' mode, while `onClear` is used to reset the state back to its default value.",
          example: <UltimatePickerExample />,
          exampleCode: ultimatePickerExample
        },
        {
          title: 'Ultimate Picker (Filter)',
          descriptions:
            "The filter version of TimeMachine with `variant='ultimate'` operates as a standalone component that integrates directly with the URL when the `isFilter` prop is enabled. This component is configured via the `filter` prop to automatically manage multiple query parameters at once: modeName` (e.g., 'up-mode')` is used to store the selected mode (such as `daily` or `weekly`), while startName and endName (e.g., `up-start`, `up-end`) are used to store the start and end values when the 'custom-range' mode is active. Just like the non-filter version, the showTime prop adds time selection options to the custom range, making this the most comprehensive date filter tool that requires no state handling in the parent component.",
          example: <UltimatePickerFilterExample />,
          exampleCode: ultimatePickerFilterExample
        }
      ]}
      propsDoc={{
        component: TimeMachine,
        propDefinitions: {
          variant: {
            type: `'date-picker' | 'date-range' | 'date-range-two-months' | 'time-range' | 'quarter-picker' | 'ultimate'`,
            description:
              'Required. Determines the type and behavior of the date picker. This prop dictates which other props are applicable.'
          },
          isFilter: {
            type: 'boolean',
            description:
              'If `true`, the component operates in filter mode, managing state via URL query parameters. This makes `date`, `onApply`, and `onClear` props inapplicable.'
          },
          filter: {
            type: 'object',
            description:
              "Configuration object required when `isFilter` is `true`. Defines the URL query parameter names. The object's shape depends on the variant (e.g., `{ name: 'dp-query' }` for `date-picker`, `{ startName: 'start', endName: 'end' }` for `date-range`, `{ startName, endName, modeName }` for `ultimate`)."
          },
          date: {
            type: 'Date | [Date | null, Date | null] | DateValueWithMode',
            description:
              'The currently selected date value. Required for controlled components (when `isFilter` is not `true`). The shape depends on the `variant`.'
          },
          onApply: {
            type: '(date: T) => void',
            description:
              'Callback function triggered when the user clicks the "Apply" button. It receives the new date value. Required for controlled components.'
          },
          onClear: {
            type: '() => void',
            description:
              'Optional callback function for the "Clear" button in controlled components. Used to reset the `date` state in the parent.'
          },
          label: {
            type: 'string',
            description: 'The text label displayed above the input field.'
          },
          showTime: {
            type: 'boolean',
            description:
              "If `true`, enables time selection alongside date selection. Applicable for `date-range` and `ultimate` (in 'custom-range' mode) variants."
          },
          locale: {
            type: 'Locale',
            description: 'The `date-fns` locale object to customize language and date formatting.'
          },
          datePickerProps: {
            type: 'DatePickerProps | (date: T) => DatePickerProps',
            description:
              'Allows passing custom props directly to the underlying `react-datepicker` component. Can be an object or a function returning an object for dynamic props. Not applicable for `time-range` variant.'
          },
          timePickerProps: {
            type: 'TimePickerProps | (date: T) => TimePickerProps',
            description:
              'Allows passing custom props directly to the `react-datepicker` time picker. Applicable for variants with `showTime` enabled, like `date-range` and `ultimate`.'
          },
          startTimeProps: {
            type: 'DatePickerProps | (date: T) => DatePickerProps',
            description: "Custom props for the start time input. Only applicable for `variant='time-range'`."
          },
          endTimeProps: {
            type: 'DatePickerProps | (date: T) => DatePickerProps',
            description: "Custom props for the end time input. Only applicable for `variant='time-range'`."
          },
          textFieldProps: {
            type: 'TextFieldProps',
            description: 'Allows passing custom props directly to the MUI `TextField` component used for the input.'
          }
        }
      }}
    />
  );
};

export default TimeMachineModule;
