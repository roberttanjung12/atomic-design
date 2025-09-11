import { DocView } from '@/@dront/components';
import Toogle from '@/@dront/components/Toogle';
import ToggleBasic from './ToggleBasic';
import toggleBasicCode from './ToggleBasic?raw';
import ToggleOnOff from './ToggleOnOff';
import toggleOnOffCode from './ToggleOnOff?raw';
import ToogleLabel from './ToogleLabel';
import toogleLabelCode from './ToogleLabel?raw';

const ToggleModule = () => {
  return (
    <DocView
      contributors={['Agung Laksono Hartadi']}
      overview={
        'The `Toogle` component provides a Material UI-based switch (toggle) with customizable label, checked state, and advanced slotProps for root and switch customization. Useful for forms, settings, and toggling features.'
      }
      sections={[
        {
          title: 'Basic',
          descriptions: 'A simple toggle switch.',
          example: <ToggleBasic />,
          exampleCode: toggleBasicCode
        },
        {
          title: 'Label',
          descriptions: 'Toggle with a custom label.',
          example: <ToogleLabel />,
          exampleCode: toogleLabelCode
        },
        {
          title: 'Active/Inactive',
          descriptions: 'Toggle with Active/Inactive label and color state.',
          example: <ToggleOnOff />,
          exampleCode: toggleOnOffCode
        }
      ]}
      propsDoc={{
        component: Toogle,
        propDefinitions: {
          checked: {
            type: 'boolean',
            description: 'If true, the component is checked (on).'
          },
          handleChange: {
            type: '(event: ChangeEvent<HTMLInputElement>) => void',
            description: 'Callback fired when the switch state changes.'
          },
          label: {
            type: 'string | React.ReactNode',
            description: 'The label to display next to the switch.'
          },
          onOff: {
            type: 'boolean',
            description: 'If true, the switch uses on/off color and label.'
          },
          disabled: {
            type: 'boolean',
            description: 'If true, the component is disabled.'
          },
          slotProps: {
            type: '{ root?: FormControlLabelProps; switch?: SwitchProps; }',
            description: 'Props to customize the root FormControlLabel and Switch components.'
          }
        }
      }}
    />
  );
};

export default ToggleModule;
