import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import { CodeViewer, Section, TextHighlighter } from '@/@dront/components';
import BasicExample from './FieldTextBasic';
import fieldTextBasicCode from './FieldTextBasic?raw';
import FieldTextError from './FieldTextError';
import fieldTextErrorError from './FieldTextError?raw';

const FieldTextModule = () => {
  return (
    <Stack spacing={4}>
      <TextHighlighter
        text="The `FieldText` component is a reusable text input field designed for forms. It includes a label, helper text,
        and error message support, making it ideal for capturing user input with validation feedback."
      />

      <Section title="Basic">
        <Typography mb={2}>
          This type is a standard text field used to collect user input. This component includes a label and a
          placeholder to provide initial guidance to the user about the data to be entered. It is suitable for general
          use in forms.
        </Typography>

        <CodeViewer code={fieldTextBasicCode}>
          <BasicExample />
        </CodeViewer>
      </Section>

      <Section title="Error Message">
        <Typography mb={2}>
          This type displays an error message when validation fails. In addition to the label and placeholder, this type
          also includes a red error message below the input field to provide visual feedback to the user about what
          needs to be corrected.
        </Typography>

        <CodeViewer code={fieldTextErrorError}>
          <FieldTextError />
        </CodeViewer>
      </Section>
    </Stack>
  );
};

export default FieldTextModule;
