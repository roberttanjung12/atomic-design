import { DocView } from '@/@dront/components';
import RadioButton from '@/@dront/components/RadioButton';
import RadioButtonBasic from './RadioButtonBasic';
import radioButtonBasicCode from './RadioButtonBasic?raw';
import RadioButtonDisabled from './RadioButtonDisabled';
import radioButtonDisabledCode from './RadioButtonDisabled?raw';
import RadioButtonProps from './RadioButtonProps';
import radioButtonPropsCode from './RadioButtonProps?raw';

const RadioButtonModule = () => {
  return (
    <DocView
      contributors={['Agung Laksono Hartadi']}
      overview={
        'The `RadioButton` component is a customizable Material UI-based radio group designed for single-choice selections. It supports labels, disabled states, and advanced customization via `slotProps`. Commonly used in forms, surveys, settings, and anywhere users must pick exactly one option from a list.'
      }
      sections={[
        {
          title: 'Basic',
          descriptions:
            'A simple radio button group with multiple options, where only one can be selected at a time. This is the most common use case, useful for preferences, forms, or single-choice questions.',
          example: <RadioButtonBasic />,
          exampleCode: radioButtonBasicCode
        },
        {
          title: 'Disabled',
          descriptions:
            'Radio buttons can be disabled to indicate unavailable options. This is helpful when certain choices are not applicable, restricted by conditions, or temporarily inactive.',
          example: <RadioButtonDisabled />,
          exampleCode: radioButtonDisabledCode
        },
        {
          title: 'Slot Props',
          descriptions:
            'Advanced customization example using `slotProps`. Developers can override the default props of the `RadioGroup`, `FormControlLabel`, and `Radio` components, making it flexible for custom styling, layouts, or interaction behavior.',
          example: <RadioButtonProps />,
          exampleCode: radioButtonPropsCode
        }
      ]}
      propsDoc={{
        component: RadioButton,
        propDefinitions: {
          options: {
            type: 'Array<{ label: string | React.ReactNode; value: string; disabled?: boolean; }>',
            description:
              'Array of radio options to display. Each option includes a label, a unique value, and an optional disabled state.',
            required: true
          },
          value: {
            type: 'string | number',
            description: 'The currently selected value. Controls which radio option appears active in the group.',
            required: true
          },
          onChange: {
            type: '(event: ChangeEvent<HTMLInputElement>) => void',
            description:
              'Callback fired when the selected value changes. Use this to update form state or trigger actions based on user selection.',
            required: true
          },
          slotProps: {
            type: '{ root?: RadioGroupProps; form?: FormControlLabelProps; radio?: RadioProps; }',
            description:
              'Provides fine-grained customization of the internal components. `root` modifies the `RadioGroup`, `form` modifies each `FormControlLabel`, and `radio` modifies the underlying `Radio` components.'
          }
        }
      }}
    />
  );
};

export default RadioButtonModule;
