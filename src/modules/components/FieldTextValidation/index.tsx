'use client';

import { DocView, FieldTextValidation } from '@/@dront/components';
import BasicExample from './FieldTextValidationBasic';
import basicExampleCode from './FieldTextValidationBasic?raw';
import WithProviderExample from './FieldTextValidationWithProvider';
import withProviderExampleCode from './FieldTextValidationWithProvider?raw';

const FieldTextValidationModule = () => {
  return (
    <DocView
      contributors={['Erghi Imannur Ichsan']}
      overview="The `FieldTextValidation` component is a reusable text input field integrated with `react-hook-form`."
      sections={[
        {
          title: 'Basic',
          descriptions: [
            'The `FieldTextValidation` component can be used outside of a FormProvider by passing the control prop manually. This is useful when you want to use the component in an isolated form or without context wrapping.',
            'It uses `react-hook-form` to manage form state and validation. In this example, `useForm` is used directly and the control object is passed to `FieldTextValidation`.'
          ],
          example: <BasicExample />,
          exampleCode: basicExampleCode
        },
        {
          title: 'With Provider',
          descriptions:
            'The `FieldTextValidation` component can also be used inside a `FormProvider` from `react-hook-form`. This is useful when you want to share form context across deeply nested components.',
          example: <WithProviderExample />,
          exampleCode: withProviderExampleCode
        }
      ]}
      propsDoc={{
        component: FieldTextValidation,
        propDefinitions: {
          control: {
            type: 'Control<FieldTextValidationValues>',
            description: 'Optional react-hook-form control. Required only when not used within a FormProvider.'
          },
          defaultValue: {
            type: 'PathValue<FieldTextValidationValues, Path<FieldTextValidationValues>>',
            description: 'Default value for the field.'
          },
          error: {
            type: 'boolean',
            description: 'Whether to display an error state.'
          },
          errorMessage: {
            type: 'React.ReactNode',
            description: 'Error message. Presence of a value toggles error state. When provided, overrides helperText.'
          },
          fullWidth: {
            type: 'boolean',
            default: 'true',
            description: 'Whether to take up the full width of its container.'
          },
          helperText: {
            type: 'React.ReactNode',
            description: 'The helper text content displayed below the input field.'
          },
          inputMode: {
            type: `'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search'`,
            description:
              'Hint at the type of data that might be entered by the user while editing the element or its contents.'
          },
          label: {
            type: 'string',
            description: 'The visible label rendered above the field.'
          },
          name: {
            type: 'Path<FieldTextValidationValues>',
            description: 'The input name attribute. Also used as htmlFor on the label.'
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
            type: `Omit<RegisterOptions<FieldTextValidationValues, Path<FieldTextValidationValues>>, 'disabled' | 'valueAsNumber' | 'valueAsDate' | 'setValueAs'>`,
            description: 'Validation rules for the field using react-hook-form.'
          },
          slotProps: {
            type: `{ root?: Omit<FormControlProps, 'error' | 'fullWidth'>; textField?: Omit<TextFieldProps<TVariant>, TextFieldPropsSubset>; }`,
            description: 'Slot props to customize internal subcomponents.'
          },
          type: {
            type: 'React.HTMLInputTypeAttribute',
            description: 'Type of the input element. It should be a valid HTML5 input type.'
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

export default FieldTextValidationModule;
