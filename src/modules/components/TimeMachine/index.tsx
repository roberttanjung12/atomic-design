import { Box } from '@mui/material';
import { Stack } from '@mui/system';
import { CodeViewer, Section, TextHighlighter } from '@/@dront/components';
import ParagraphWrapper from '@/@dront/components/ParagraphWrapper';
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
    <Stack spacing={4}>
      <TextHighlighter text="The `TimeMachine` component is a reusable date-picker component integrated with `react-datepicker` so developers can easily use this component without worrying about styles and complex integration." />

      <Section title="Date Picker">
        <ParagraphWrapper>
          <TextHighlighter text="`TimeMachine` with the `date-picker` variant allows users to select a single date from an interactive calendar interface. The user's choice is confirmed via an `Apply` action, making it a controlled component ideal for forms and scheduling." />

          <Box sx={{ backgroundColor: 'info.light', p: 1, maxWidth: 580 }}>
            <TextHighlighter text="Hint: If you change the language, the date format will also change accordingly." />
          </Box>

          <CodeViewer code={datePickerExample}>
            <DatePickerExample />
          </CodeViewer>
        </ParagraphWrapper>
      </Section>

      <Section title="Date Picker (Filter)">
        <ParagraphWrapper>
          <TextHighlighter text="In filter mode, `TimeMachine` integrates directly with the URL. Set the `isFilter` prop to enable this mode. Use the `filter` prop for configuration, where the name property `(e.g., { name: 'dp-query' })` defines the name of the URL query parameter. The component will automatically read from and write to this parameter when the user applies or clears the filter, eliminating the need for state handling in the parent component." />

          <CodeViewer code={datePickerFilterExample}>
            <DatePickerFilterExample />
          </CodeViewer>
        </ParagraphWrapper>
      </Section>

      <Section title="Date Range">
        <ParagraphWrapper>
          <TextHighlighter text="This example demonstrates how to use the `TimeMachine` component to select a `date` and `time` range. By setting the variant prop to `date-range` and including the `showTime` prop, the component renders an advanced interface for picking both a start and end date, complete with time selection for each." />

          <CodeViewer code={dateRangeExample}>
            <DateRangeExample />
          </CodeViewer>
        </ParagraphWrapper>
      </Section>

      <Section title="Date Range (Filter)">
        <TextHighlighter text="Similar to the `single-date` filter, the `date-range` variant operates as a self-contained component that integrates directly with the URL. The key difference lies in the `filter` prop's configuration, which requires two properties instead of one: `startName` for the start date's query parameter and `endName` for the end date's parameter. This allows the component to automatically read from and write to two separate URL parameters, such as `?dr-start=...&dr-end=....` The inclusion of the `showTime` prop further enhances this by adding time values to the filter, providing higher precision for time-sensitive range filtering." />

        <ParagraphWrapper>
          <CodeViewer code={dateRangeFilterExample}>
            <DateRangeFilterExample />
          </CodeViewer>
        </ParagraphWrapper>
      </Section>

      <Section title="Date Range Two Months Displayed">
        <ParagraphWrapper>
          <TextHighlighter text="This is a controlled component that uses the `variant='date-range-two-months'` to render a date range picker that always displays two calendar months side-by-side, making it easier to select ranges that span across months." />

          <CodeViewer code={dateRangeTwoMonthsDisplayedExample}>
            <DateRangeTwoMonthsDisplayedExample />
          </CodeViewer>
        </ParagraphWrapper>
      </Section>

      <Section title="Date Range Two Months Displayed (Filter)">
        <ParagraphWrapper>
          <TextHighlighter text="This is a self-contained date range filter that displays two calendar months simultaneously. It automatically manages the selected range by updating the URL with `drtm-start` and `drtm-end` query parameters." />

          <CodeViewer code={dateRangeTwoMonthsDisplayedFilterExample}>
            <DateRangeTwoMonthsDisplayedFilterExample />
          </CodeViewer>
        </ParagraphWrapper>
      </Section>

      <Section title="Time Range Picker">
        <TextHighlighter text="This example demonstrates how to use the TimeMachine component specifically for selecting a time range. By setting the variant prop to `time-range`, the component renders an interface focused exclusively on choosing a start and end time `(e.g., 9:00 to 17:00)`, without displaying a calendar." />

        <ParagraphWrapper>
          <CodeViewer code={timeRangePickerExample}>
            <TimeRangePickerExample />
          </CodeViewer>
        </ParagraphWrapper>
      </Section>

      <Section title="Time Range Picker (Filter)">
        <TextHighlighter text="This component acts as a time range filter that integrates directly with the URL, using `dp-start-time` and `dp-end-time` as the query parameter names for the start and end times." />

        <ParagraphWrapper>
          <CodeViewer code={timeRangePickerFilterExample}>
            <TimeRangePickerFilterExample />
          </CodeViewer>
        </ParagraphWrapper>
      </Section>

      <Section title="Quarter Picker">
        <TextHighlighter text="This component uses the `variant='quarter-picker'` to allow users to select a quarter, such as `Q1 2025`." />

        <ParagraphWrapper>
          <CodeViewer code={quarterPickerExample}>
            <QuarterPickerExample />
          </CodeViewer>
        </ParagraphWrapper>
      </Section>

      <Section title="Quarter Picker (Filter)">
        <TextHighlighter text="This component is a self-contained filter for a quarter range that automatically updates the URL with `qp-start` and `qp-end` query parameters." />

        <ParagraphWrapper>
          <CodeViewer code={quarterPickerFilterExample}>
            <QuarterPickerFilterExample />
          </CodeViewer>
        </ParagraphWrapper>
      </Section>

      <Section title="Ultimate Picker">
        <TextHighlighter text="This component demonstrates TimeMachine with `variant='ultimate'`, a comprehensive date picker controlled by a single state object of type `DateValueWithMode`. This object consists of a `mode` property that defines the selection type (such as `daily`, `weekly`, `monthly`, `quarter`, `yearly`, or `custom-range`) and a value property that holds the actual date value. The entire state object is passed to the date prop and updated via the `onApply` callback, which returns a new `{ mode, value }` object each time the user applies a selection. The `showTime` prop specifically adds time selection functionality to the 'custom-range' mode, while `onClear` is used to reset the state back to its default value." />

        <ParagraphWrapper>
          <CodeViewer code={ultimatePickerExample}>
            <UltimatePickerExample />
          </CodeViewer>
        </ParagraphWrapper>
      </Section>

      <Section title="Ultimate Picker (Filter)">
        <TextHighlighter text="The filter version of TimeMachine with `variant='ultimate'` operates as a standalone component that integrates directly with the URL when the `isFilter` prop is enabled. This component is configured via the `filter` prop to automatically manage multiple query parameters at once: modeName` (e.g., 'up-mode')` is used to store the selected mode (such as `daily` or `weekly`), while startName and endName (e.g., `up-start`, `up-end`) are used to store the start and end values when the 'custom-range' mode is active. Just like the non-filter version, the showTime prop adds time selection options to the custom range, making this the most comprehensive date filter tool that requires no state handling in the parent component." />

        <ParagraphWrapper>
          <CodeViewer code={ultimatePickerFilterExample}>
            <UltimatePickerFilterExample />
          </CodeViewer>
        </ParagraphWrapper>
      </Section>
    </Stack>
  );
};

export default TimeMachineModule;
