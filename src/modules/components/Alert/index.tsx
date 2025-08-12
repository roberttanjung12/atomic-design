import { Stack } from '@mui/material';
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
