'use client';

import FieldPasswordValidation from '@dront/ui/FieldPasswordValidation';
import { DocView } from '@/@dront/components';
import BasicExample from './FieldPasswordValidationBasic';
import basicExampleCode from './FieldPasswordValidationBasic?raw';
import WithProviderExample from './FieldPasswordValidationWithProvider';
import withProviderExampleCode from './FieldPasswordValidationWithProvider?raw';

const FieldPasswordValidationModule = () => {
  return (
    <DocView
      contributors={['Erghi Imannur Ichsan']}
      overview="The `FieldPasswordValidation` component is a form-integrated input field built with `react-hook-form`. It supports validation, error messaging, and can be used with or without a `FormProvider`."
      sections={[
        {
          title: 'Basic',
          descriptions: [
            "Use `FieldPasswordValidation` without a `FormProvider` by explicitly passing the `control` prop. This is useful for small, isolated forms or components that don't require shared form context.",
            'The example below uses `useForm` directly to create a local form instance, which is passed to the component for validation and state management.'
          ],
          example: <BasicExample />,
          exampleCode: basicExampleCode
        },
        {
          title: 'With Provider',
          descriptions: [
            'You can also use `FieldPasswordValidation` inside a `FormProvider` to share form state across nested components.',
            'This is helpful in complex forms or multi-step workflows.'
          ],
          example: <WithProviderExample />,
          exampleCode: withProviderExampleCode
        }
      ]}
      propsDoc={{
        component: FieldPasswordValidation,
        propDefinitions: {
          name: {
            type: 'Path<FieldPasswordValidationValues>',
            description: 'The input name attribute. Also used as htmlFor on the label.',
            required: true
          },
          label: {
            type: 'ReactNode | string',
            description: 'The visible label rendered above the field.',
            required: true
          },
          control: {
            type: 'Control<FieldPasswordValidationValues>',
            description: 'Optional react-hook-form control. Required only when not used within a FormProvider.'
          },
          defaultValue: {
            type: 'PathValue<FieldPasswordValidationValues, Path<FieldPasswordValidationValues>>',
            description: 'Default value for the field.'
          },
          error: {
            type: 'boolean',
            description: 'Whether to display an error state.'
          },
          errorMessage: {
            type: 'ReactNode | string',
            description: 'Error message. Presence of a value toggles error state. When provided, overrides helperText.'
          },
          fullWidth: {
            type: 'boolean',
            default: 'true',
            description: 'Whether to take up the full width of its container.'
          },
          helperText: {
            type: 'ReactNode | string',
            description: 'The helper text content displayed below the input field.'
          },
          placeholder: {
            type: 'string',
            description: 'The short hint displayed in the input before the user enters a value.'
          },
          size: {
            type: `'medium' | 'small'`,
            description: 'The size of the component.'
          },
          rules: {
            type: `Omit<RegisterOptions<FieldPasswordValidationValues, Path<FieldPasswordValidationValues>>, 'disabled' | 'valueAsNumber' | 'valueAsDate' | 'setValueAs'>`,
            description: 'Validation rules for the field using react-hook-form.'
          },
          slotProps: {
            type: `{ root?: Omit<FormControlProps, 'error' | 'fullWidth'>; textField?: Omit<TextFieldProps<TVariant>, TextFieldPropsSubset>; }`,
            description: 'Slot props to customize internal subcomponents.'
          },
          variant: {
            type: 'TextFieldVariants',
            description: 'The variant to use for the TextField component.'
          }
        }
      }}
    />
  );
};

export default FieldPasswordValidationModule;
