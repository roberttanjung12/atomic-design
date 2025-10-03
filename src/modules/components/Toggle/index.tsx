import { DocView } from '@/@dront/components';
import Toggle from '@/@dront/components/Toggle';
import ToggleBasic from './ToggleBasic';
import toggleBasicCode from './ToggleBasic?raw';
import ToggleLabel from './ToggleLabel';
import toggleLabelCode from './ToggleLabel?raw';
import ToggleOnOff from './ToggleOnOff';
import toggleOnOffCode from './ToggleOnOff?raw';
import TogglePlacement from './TogglePlacement';
import togglePlacementCode from './TogglePlacement?raw';

const ToggleModule = () => {
  return (
    <DocView
      contributors={['Agung Laksono Hartadi']}
      overview={
        'The `Toggle` component is a reusable Material UI-based switch (toggle) designed for handling on/off states in forms, settings, and interactive UI elements. It supports labels, state-based color changes, and advanced customization through `slotProps`. This makes it flexible for various use cases, from simple boolean toggles to more descriptive on/off controls in dashboards, user preferences, or feature settings.'
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
          example: <ToggleLabel />,
          exampleCode: toggleLabelCode
        },
        {
          title: 'Label Placement',
          descriptions:
            'The label associated with the toggle can be positioned on any side of the switch: end, start, top, or bottom. This flexibility helps adapt the toggle layout to different UI requirements, such as aligning with forms, lists, or compact settings panels.',
          example: <TogglePlacement />,
          exampleCode: togglePlacementCode
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
        component: Toggle,
        propDefinitions: {
          checked: {
            type: 'boolean',
            description: 'If true, the component is checked (on). Controls the toggle state.',
            required: true
          },
          onChange: {
            type: '(event: ChangeEvent<HTMLInputElement>) => void',
            description:
              'Callback fired whenever the toggle state changes. Use this to update form values or trigger side effects.',
            required: true
          },
          label: {
            type: 'string | node',
            description: 'The label displayed next to the switch. Can be text or a React element for custom formatting.'
          },
          activeLabel: {
            type: 'string | node',
            description:
              'The label shown when the toggle is in the active (checked) state. If not provided, defaults to `label`.'
          },
          inactiveLabel: {
            type: 'string | node',
            description:
              'The label shown when the toggle is in the inactive (unchecked) state. If not provided, defaults to `label`.'
          },
          activeColor: {
            type: 'string',
            description:
              'The color applied to the switch track and border when active (checked). Defaults to `theme.palette.primary.main`.'
          },
          inactiveColor: {
            type: 'string',
            description:
              'The color applied to the switch track and border when inactive (unchecked). Defaults to `theme.palette.action.disabled` for background and `theme.palette.primary.main` for border.'
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
