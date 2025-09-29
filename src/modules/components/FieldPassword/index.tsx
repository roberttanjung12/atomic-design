import { DocView, FieldPassword } from '@/@dront/components';
import FieldPasswordBasic from './FieldPasswordBasic';
import fieldPasswordBasicCode from './FieldPasswordBasic?raw';
import FieldPasswordError from './FieldPasswordError';
import fieldPasswordErrorCode from './FieldPasswordError?raw';

const FieldPasswordModule = () => {
  return (
    <DocView
      contributors={['Erghi Imannur Ichsan']}
      overview="The `FieldPassword` component is a secure and user-friendly password input field for forms. A built-in toggle allows users to show or hide their password input for better usability."
      sections={[
        {
          title: 'Basic',
          descriptions:
            'This example demonstrates a standard password input field. It includes a label and placeholder text to guide the user in entering data. This configuration is suitable for general form use without validation errors.',
          example: <FieldPasswordBasic />,
          exampleCode: fieldPasswordBasicCode
        },
        {
          title: 'Error Message',
          descriptions:
            'This example shows a password field with validation feedback. If an error occurs (e.g., the input is empty or does not meet criteria), an error message is displayed below the field in red to alert the user and guide correction.',
          example: <FieldPasswordError />,
          exampleCode: fieldPasswordErrorCode
        }
      ]}
      propsDoc={{
        component: FieldPassword,
        propDefinitions: {
          error: {
            type: 'boolean',
            description: 'Wheter the label is displayed in an error state'
          },
          errorMessage: {
            type: 'ReactNode',
            description: 'Error message. Presence of a value toggles error state. When provided, overrides helperText.'
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
          inputMode: {
            type: `'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search'`,
            description:
              'Hints at the type of data that might be entered by the user while editing the element or its contents.'
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
          size: {
            type: `'medium' | 'small'`,
            default: `'medium'`,
            description: 'The size of the component.'
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
  );
};

export default FieldPasswordModule;
