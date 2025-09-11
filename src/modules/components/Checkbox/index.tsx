import { DocView } from '@/@dront/components';
import Checkboxes from '@/@dront/components/CheckBoxes';
import CheckboxBasic from './CheckboxBasic';
import checkboxBasicCode from './CheckboxBasic?raw';
import CheckboxDisabled from './CheckboxDisabled';
import checkboxDisabledCode from './CheckboxDisabled?raw';
import CheckboxLabel from './CheckboxLabel';
import checkboxLabelCode from './CheckboxLabel?raw';
import CheckboxProps from './CheckboxProps';
import checkboxPropsCode from './CheckboxProps?raw';

const CheckboxModule = () => {
  return (
    <DocView
      contributors={['Agung Laksono Hartadi']}
      overview={
        'The `Checkboxes` component provides a Material UI-based checkbox with customizable color and checked state. It is useful for forms, settings, and any UI where binary selection is needed.'
      }
      sections={[
        {
          title: 'Basic',
          descriptions: 'A simple checkbox. The default state is checked.',
          example: <CheckboxBasic />,
          exampleCode: checkboxBasicCode
        },
        {
          title: 'Label',
          descriptions: 'You can provide a label to the `Checkbox`.',
          example: <CheckboxLabel />,
          exampleCode: checkboxLabelCode
        },
        {
          title: 'Disabled',
          descriptions: 'You can `disable` a Checkbox .',
          example: <CheckboxDisabled />,
          exampleCode: checkboxDisabledCode
        },
        {
          title: 'Slot Props',
          descriptions: 'You can custom `Checkbox` props.',
          example: <CheckboxProps />,
          exampleCode: checkboxPropsCode
        }
      ]}
      propsDoc={{
        // Komponen yang didokumentasikan
        component: Checkboxes,
        // Definisi properti utama
        propDefinitions: {
          label: {
            type: 'node | string',
            description: 'A text or an element to be used in an enclosing label element.'
          },
          checked: {
            type: 'boolean',
            description: 'If true, the component is checked.'
          },
          handleChange: {
            type: 'function',
            description: 'Callback fired when the state is changed.'
          },
          disabled: {
            type: 'boolean',
            description: 'If true, the control is disabled.'
          },
          slotProps: {
            type: '{ typography?: func | object }',
            description: 'The props used for each slot inside.'
          }
        }
      }}
    />
  );
};

export default CheckboxModule;
