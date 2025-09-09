import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import { CodeViewer, DocView, FieldText, Section, TextHighlighter } from '@/@dront/components';
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

      <DocView
        contributors={['Erghi Imannur Ichsan']}
        overview="The `FieldText` component is a reusable text input field designed for forms. It includes a label, helper text, and error message support, making it ideal for capturing user input with validation feedback."
        sections={[
          {
            title: 'Basic',
            descriptions:
              'This type is a standard text field used to collect user input. This component includes a label and a placeholder to provide initial guidance to the user about the data to be entered. It is suitable for general use in forms.',
            example: <BasicExample />,
            exampleCode: fieldTextBasicCode
          },
          {
            title: 'Error Message',
            descriptions:
              'This type displays an error message when validation fails. In addition to the label and placeholder, this type also includes a red error message below the input field to provide visual feedback to the user about what needs to be corrected.',
            example: <FieldTextError />,
            exampleCode: fieldTextErrorError
          }
        ]}
        propsDoc={{
          component: FieldText,
          propDefinitions: {
            errorMessage: {
              type: 'ReactNode',
              description:
                'Error message. Presence of a value toggles error state. When provided, overrides helperText.'
            },
            fullWidth: {
              type: 'boolean',
              default: 'true',
              description:
                'Whether the field should take the full width of its container. Defaults to true in the component implementation.'
            },
            helperText: {
              type: 'ReactNode',
              description: 'Helper text displayed beneath the field when there is no error.'
            },
            label: {
              type: 'string',
              description: 'The visible label rendered above the field.'
            },
            name: {
              type: 'string',
              description: 'The input name attribute. Also used as htmlFor on the label.'
            },
            placeholder: {
              type: 'string',
              description: 'Placeholder text shown when the input is empty.'
            },
            slotProps: {
              type: '{ root?: FormControlProps; textField?: TextFieldProps; }',
              description: 'Slot props for customizing components.'
            },
            variant: {
              type: `'outlined' | 'standard' | 'filled'`,
              default: `'outlined'`,
              description: 'Visual style variant of the MUI TextField / FormControl.'
            }
          }
        }}
      />
    </Stack>
  );
};

export default FieldTextModule;
