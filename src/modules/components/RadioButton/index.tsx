import { DocView } from '@/@dront/components';
import RadioButton from '@/@dront/components/RadioButton';
import RadioButtonBasic from './RadioButtonBasic';
import radioButtonBasicCode from './RadioButtonBasic?raw';
import RadioButtonDisabled from './RadioButtonDisabled';
import radioButtonDisabledCode from './RadioButtonDisabled?raw';
import RadioButtonProps from './RadioButtonProps';
import adioButtonPropsCode from './RadioButtonProps?raw';

const RadioButtonModule = () => {
  return (
    <DocView
      contributors={['Agung Laksono Hartadi']}
      overview={
        'The `RadioButton` component provides a Material UI-based radio group with customizable options, value, and slotProps for advanced customization. Useful for forms and selection groups where only one option can be selected.'
      }
      sections={[
        {
          title: 'Basic',
          descriptions: 'A simple radio button group.',
          example: <RadioButtonBasic />,
          exampleCode: radioButtonBasicCode
        },
        {
          title: 'Disabled',
          descriptions: 'Radio buttons with disabled option.',
          example: <RadioButtonDisabled />,
          exampleCode: radioButtonDisabledCode
        },
        {
          title: 'Slot Props',
          descriptions: 'Customize the root, form, and radio props using slotProps.',
          example: <RadioButtonProps />,
          exampleCode: adioButtonPropsCode
        }
      ]}
      propsDoc={{
        component: RadioButton,
        propDefinitions: {
          options: {
            type: 'Array<{ label: string | React.ReactNode; value: string; disabled?: boolean; }>',
            description: 'Array of radio options to display.'
          },
          value: {
            type: 'string | number',
            description: 'The currently selected value.'
          },
          handleChange: {
            type: '(event: ChangeEvent<HTMLInputElement>) => void',
            description: 'Callback fired when the selected value changes.'
          },
          slotProps: {
            type: '{ root?: RadioGroupProps; form?: FormControlLabelProps; radio?: RadioProps; }',
            description: 'Props to customize the root RadioGroup, FormControlLabel, and Radio components.'
          }
        }
      }}
    />
  );
};

export default RadioButtonModule;
