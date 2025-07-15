import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import { CodeViewer, Section, TextHighlighter } from '@/@dront/components';
import FieldPasswordBasic from './FieldPasswordBasic';
import fieldPasswordBasicCode from './FieldPasswordBasic?raw';
import FieldPasswordError from './FieldPasswordError';
import fieldPasswordErrorCode from './FieldPasswordError?raw';

const FieldTextModule = () => {
  return (
    <Stack spacing={4}>
      <TextHighlighter text="The `FieldPassword` component is a secure and user-friendly password input field for forms. A built-in toggle allows users to show or hide their password input for better usability." />

      <Section title="Basic">
        <Typography mb={2}>
          This example demonstrates a standard password input field. It includes a label and placeholder text to guide
          the user in entering data. This configuration is suitable for general form use without validation errors.
        </Typography>

        <CodeViewer code={fieldPasswordBasicCode}>
          <FieldPasswordBasic />
        </CodeViewer>
      </Section>

      <Section title="Error Message">
        <Typography mb={2}>
          This example shows a password field with validation feedback. If an error occurs (e.g., the input is empty or
          does not meet criteria), an error message is displayed below the field in red to alert the user and guide
          correction.
        </Typography>

        <CodeViewer code={fieldPasswordErrorCode}>
          <FieldPasswordError />
        </CodeViewer>
      </Section>
    </Stack>
  );
};

export default FieldTextModule;
