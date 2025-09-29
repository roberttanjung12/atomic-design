import { DocView } from '@/@dront/components';
import Checkboxes from '@/@dront/components/CheckBoxes';
import CheckboxBasic from './CheckboxBasic';
import checkboxBasicCode from './CheckboxBasic?raw';
import CheckboxDisabled from './CheckboxDisabled';
import checkboxDisabledCode from './CheckboxDisabled?raw';
import CheckboxLabel from './CheckboxLabel';
import checkboxLabelCode from './CheckboxLabel?raw';
import CheckboxPlacement from './CheckboxPlacement';
import checkboxPlacementCode from './CheckboxPlacement?raw';
import CheckboxProps from './CheckboxProps';
import checkboxPropsCode from './CheckboxProps?raw';

const CheckboxModule = () => {
  return (
    <DocView
      contributors={['Agung Laksono Hartadi']}
      overview={
        'The `Checkboxes` component is a Material UI-based checkbox designed for binary selections (checked/unchecked). It supports labels, disabled states, and advanced customization through `slotProps`. Commonly used in forms, task lists, filters, and settings where multiple selections may be allowed.'
      }
      sections={[
        {
          title: 'Basic',
          descriptions:
            'A simple standalone checkbox. By default, it can be either checked or unchecked. Useful for cases like accepting terms, toggling a single preference, or marking tasks as complete.',
          example: <CheckboxBasic />,
          exampleCode: checkboxBasicCode
        },
        {
          title: 'Label',
          descriptions:
            'Checkbox with a label to provide context to the selection. Labels make checkboxes self-explanatory, for example: "Subscribe to newsletter" or "Enable notifications".',
          example: <CheckboxLabel />,
          exampleCode: checkboxLabelCode
        },
        {
          title: 'Label Placement',
          descriptions: 'You can change the placement of the label:',
          example: <CheckboxPlacement />,
          exampleCode: checkboxPlacementCode
        },
        {
          title: 'Disabled',
          descriptions:
            'A disabled checkbox cannot be interacted with. This is helpful when the option is unavailable, restricted by conditions, or should only be displayed for information purposes.',
          example: <CheckboxDisabled />,
          exampleCode: checkboxDisabledCode
        },
        {
          title: 'Slot Props',
          descriptions:
            'Advanced customization using `slotProps`. This allows developers to override default props (like typography, color, or size) to adapt the checkbox to specific design requirements.',
          example: <CheckboxProps />,
          exampleCode: checkboxPropsCode
        }
      ]}
      propsDoc={{
        component: Checkboxes,
        propDefinitions: {
          label: {
            type: 'node | string',
            description:
              'A text or React element to be used as the label for the checkbox. Provides context for what the checkbox controls.'
          },
          checked: {
            type: 'boolean',
            description: 'If true, the checkbox is checked. Controls its current selection state.'
          },
          handleChange: {
            type: 'function',
            description:
              'Callback fired whenever the state changes (checked ↔ unchecked). Use this to update form state or trigger related actions.'
          },
          disabled: {
            type: 'boolean',
            description: 'If true, the checkbox is disabled and cannot be interacted with.'
          },
          slotProps: {
            type: '{ root?: FormControlLabelProps; checkBox?: CheckboxProps; }',
            description:
              'Allows fine-grained customization of the underlying components. Use `root` to override props of the FormControlLabel (e.g., placement, styling, or label position) and `checkbox` to override props of the Checkbox itself (e.g., size, color, icon, or edge).'
          }
        }
      }}
    />
  );
};

export default CheckboxModule;
