import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import { CodeViewer, Section, TextHighlighter } from '@/@dront/components';
import TabsNavigatorBasic from './StatusIndicatorBasic';
import statusIndicatorBasicCode from './StatusIndicatorBasic?raw';
import StatusIndicatorContainerWrapper from './StatusIndicatorContainerWrapper';
import statusIndicatorContainerWrapperCode from './StatusIndicatorContainerWrapper?raw';
import StatusIndicatorVariant from './StatusIndicatorVariant';
import statusIndicatorVariantCode from './StatusIndicatorVariant?raw';

const TabsNavigatorModule = () => {
  return (
    <Stack spacing={4}>
      <TextHighlighter text="`TabsNavigator` is a customizable tab navigation component built on top of Material UI’s Tabs. It provides flexible styling options and content handling, making it suitable for switching between multiple views or sections in your application." />

      <Section title="Basic">
        <Typography mb={2}>
          Renders a simple tab bar with labeled tabs and their corresponding content. It defaults to the underline
          style, where the active tab is highlighted with an underline.
        </Typography>

        <CodeViewer code={statusIndicatorBasicCode}>
          <TabsNavigatorBasic />
        </CodeViewer>
      </Section>

      <Section title="Variant">
        <Typography mb={2}>
          Supports different visual styles through the variant prop: This allows you to adapt the component's look to
          different design requirements.
        </Typography>
        <ul>
          <li>underline - highlights the active tab with an underline (default).</li>
          <li>outlined - renders tabs with borders and changes background when active.</li>
        </ul>
        <Typography mb={2}>This allows you to adapt the component’s look to different design requirements.</Typography>

        <CodeViewer code={statusIndicatorVariantCode}>
          <StatusIndicatorVariant />
        </CodeViewer>
      </Section>

      <Section title="Container Wrapper">
        <Typography mb={2}>
          You can provide a custom contentWrapper function to wrap the tab content with your own UI components. For
          example, wrapping content in a Material UI Card allows you to maintain consistent design across sections.
        </Typography>

        <CodeViewer code={statusIndicatorContainerWrapperCode}>
          <StatusIndicatorContainerWrapper />
        </CodeViewer>
      </Section>
    </Stack>
  );
};

export default TabsNavigatorModule;
