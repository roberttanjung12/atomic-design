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
        'The `Toogle` component is a reusable Material UI-based switch (toggle) designed for handling on/off states in forms, settings, and interactive UI elements. It supports labels, state-based color changes, and advanced customization through `slotProps`. This makes it flexible for various use cases, from simple boolean toggles to more descriptive on/off controls in dashboards, user preferences, or feature settings.'
      }
      sections={[
        {
          title: 'Basic',
          descriptions:
            'A minimal toggle switch that only controls on/off state. Useful for simple form inputs or basic settings where no label or extra context is required.',
          example: <ToggleBasic />,
          exampleCode: toggleBasicCode
        },
        {
          title: 'Label',
          descriptions:
            'Toggle with a label displayed next to it. Ideal for cases where the toggle needs to be self-explanatory, such as enabling notifications, dark mode, or other named features.',
          example: <ToogleLabel />,
          exampleCode: toogleLabelCode
        },
        {
          title: 'Active/Inactive',
          descriptions:
            'A toggle that shows different labels and colors depending on its state (Active/Inactive). Useful for clearer user feedback, especially in dashboards or status controls where the toggle state should be immediately recognizable.',
          example: <ToggleOnOff />,
          exampleCode: toggleOnOffCode
        }
      ]}
      propsDoc={{
        component: Toogle,
        propDefinitions: {
          checked: {
            type: 'boolean',
            description: 'If true, the component is checked (on). Controls the toggle state.'
          },
          handleChange: {
            type: '(event: ChangeEvent<HTMLInputElement>) => void',
            description:
              'Callback fired whenever the toggle state changes. Use this to update form values or trigger side effects.'
          },
          label: {
            type: 'string | React.ReactNode',
            description: 'The label displayed next to the switch. Can be text or a React element for custom formatting.'
          },
          onOff: {
            type: 'boolean',
            description:
              'If true, the toggle will display "On/Off" (or Active/Inactive) with corresponding colors to reflect its state.'
          },
          disabled: {
            type: 'boolean',
            description: 'If true, the toggle is disabled and cannot be interacted with.'
          },
          slotProps: {
            type: '{ root?: FormControlLabelProps; switch?: SwitchProps; }',
            description:
              'Customizes the underlying Material UI components. Use `root` for `FormControlLabel` props (like styling or placement) and `switch` for `Switch` props (like size, color, or edge).'
          }
        }
      }}
    />
  );
};

export default ToggleModule;
