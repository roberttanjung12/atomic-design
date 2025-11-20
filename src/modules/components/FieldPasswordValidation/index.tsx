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
          control: {
            type: 'Control<FieldPasswordValidationValues>',
            description: 'Optional react-hook-form control. Required only when not used within a FormProvider.'
          },
          defaultValue: {
            type: 'PathValue<FieldPasswordValidationValues, Path<FieldPasswordValidationValues>>',
            description: 'Default value for the field.'
          },
          rules: {
            type: `Omit<RegisterOptions<FieldPasswordValidationValues, Path<FieldPasswordValidationValues>>, 'disabled' | 'valueAsNumber' | 'valueAsDate' | 'setValueAs'>`,
            description: 'Validation rules for the field using react-hook-form.'
          }
        }
      }}
      dependencies={{
        'react-hook-form': {
          version: '>= 7',
          description: ''
        }
      }}
    />
  );
};

export default FieldPasswordValidationModule;
