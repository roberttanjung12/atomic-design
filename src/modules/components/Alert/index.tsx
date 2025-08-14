import { Stack, Typography } from '@mui/material';
import { CodeViewer, Section, TextHighlighter } from '@/@dront/components';
import ParagraphWrapper from '@/@dront/components/ParagraphWrapper';
import AlertFloating from './AlertFloating';
import alertFloating from './AlertFloating?raw';
import AlertSnackbar from './AlertSnackbar';
import alertSnackbar from './AlertSnackbar?raw';
import AlertStandard from './AlertStandard';
import alertStandard from './AlertStandard?raw';

const AlertModule = () => {
  return (
    <Stack spacing={4}>
      <TextHighlighter text="`Alert` are used as a system mechanism to provide feedback or information to users" />

      <Section title="Standard">
        <ParagraphWrapper>
          <TextHighlighter text="1. `title (string) Required` - Title to display at the top of the alert. " />
          <TextHighlighter text="2. `severity (string) Optional` - The severity level of the alert (e.g., 'error', 'warning', 'info', 'success')." />
          <TextHighlighter text="3. `variant (string) Optional` - The visual variant of the alert ('standard' or 'snackbar'). Defaults to 'standard'." />
          <TextHighlighter text="4. `message (string | ReactNode) Optional` - The main message content of the alert. Can be a string or a React node." />
          <TextHighlighter text="5. `muiAlertProps (Omit<MuiAlertProps, 'severity'>) Optional` - Additional props to pass to the underlying MUI Alert component." />

          <CodeViewer code={alertStandard}>
            <AlertStandard />
          </CodeViewer>
        </ParagraphWrapper>
      </Section>

      <Section title="Snackbar">
        <TextHighlighter text="Use the `variant` prop to switch the alert style to `snackbar`. Available variants are `standard` and `snackbar`." />

        <ParagraphWrapper>
          <CodeViewer code={alertSnackbar}>
            <AlertSnackbar />
          </CodeViewer>
        </ParagraphWrapper>
      </Section>

      <Section title="Floating Alert">
        <TextHighlighter text="Demonstrates an alert that floats above the content, typically used for transient notifications that do not disrupt the user's workflow." />

        <Typography variant="h5" mt={2} mb={1}>
          Main Params
        </Typography>
        <TextHighlighter text="`duration (number) Optional` - The duration in milliseconds for which the alert should be displayed. Defaults to 3000ms." />
        <TextHighlighter text="`position (string) Optional` - The position of the alert on the screen. Defaults to 'top-right'." />
        <TextHighlighter text="`offset (object) Optional` - An object to fine-tune the alert's position. It accepts `top`, `bottom`, `left`, and `right` properties with string values (e.g., '10px', '5%')." />

        <ParagraphWrapper>
          <CodeViewer code={alertFloating}>
            <AlertFloating />
          </CodeViewer>
        </ParagraphWrapper>
      </Section>
    </Stack>
  );
};

export default AlertModule;
