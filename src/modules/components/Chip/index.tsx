import { DocView } from '@/@dront/components';

import Chip from '@/@dront/components/Chips';
import AvatarExample from './ChipAvatar';
import avatarExampleCode from './ChipAvatar?raw';
import BasicExample from './ChipBasic';
import basicExampleCode from './ChipBasic?raw';
import ColorExample from './ChipColor';
import colorExampleCode from './ChipColor?raw';
import DeleteExample from './ChipDelete';
import deleteExampleCode from './ChipDelete?raw';
import IconExample from './ChipIcon';
import iconExampleCode from './ChipIcon?raw';
import SelectableExample from './ChipSelectable';
import selectableExampleCode from './ChipSelectable?raw';
import SizeExample from './ChipSize';
import sizeExampleCode from './ChipSize?raw';
import VariantExample from './ChipVariant';
import variantExampleCode from './ChipVariant?raw';

const ChipModule = () => {
  return (
    <DocView
      contributors={['I Nyoman Arijaya Putra']}
      overview="The `Chip` component is an enhanced version of MUI's Chip, offering support for larger sizes, selectable states, tooltips, avatars, and consistent styling across different use cases."
      sections={[
        {
          title: 'Basic',
          descriptions: 'A simple chip with a label, useful for tags, categories, or quick indicators.',
          example: <BasicExample />,
          exampleCode: basicExampleCode
        },
        {
          title: 'Variant',
          descriptions: 'The `variant` prop allows you to switch between `filled` and `outlined` styles.',
          example: <VariantExample />,
          exampleCode: variantExampleCode
        },
        {
          title: 'Size',
          descriptions:
            "The `size` prop controls the chip's dimensions. Available options are `small`, `medium`, and `large`.",
          example: <SizeExample />,
          exampleCode: sizeExampleCode
        },
        {
          title: 'Color',
          descriptions:
            'The `color` prop supports multiple palette options such as `primary`, `secondary`, `success`, and more.',
          example: <ColorExample />,
          exampleCode: colorExampleCode
        },
        {
          title: 'Selectable',
          descriptions:
            'Chips can be made `selectable` to indicate toggled states. This is a controlled pattern: you pass `selected` to reflect state and handle changes via `onClick`. The `selectable` prop only enables visual affordance (pointer/hover). You still need to update the state yourself inside `onClick`.',
          example: <SelectableExample />,
          exampleCode: selectableExampleCode
        },
        {
          title: 'Icon',
          descriptions: 'Add an `icon` at the start of the chip to indicate context, like a category or status.',
          example: <IconExample />,
          exampleCode: iconExampleCode
        },
        {
          title: 'Avatar',
          descriptions: 'Add an avatar to visually represent an entity, like a user or item.',
          example: <AvatarExample />,
          exampleCode: avatarExampleCode
        },
        {
          title: 'On Delete',
          descriptions: 'Enable deletion by passing an `onDelete` handler, which shows a delete icon inside the chip.',
          example: <DeleteExample />,
          exampleCode: deleteExampleCode
        }
      ]}
      propsDoc={{
        component: Chip,
        propDefinitions: {
          label: {
            type: 'string',
            description: 'The content of the chip.'
          },
          size: {
            type: "'small' | 'medium' | 'large'",
            default: 'medium',
            description: 'The size of the chip.'
          },
          color: {
            type: "'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'",
            default: 'default',
            description: 'The color of the chip.'
          },
          variant: {
            type: "'filled' | 'outlined'",
            default: 'filled',
            description: 'The variant to use.'
          },
          selectable: {
            type: 'boolean',
            default: 'false',
            description: 'If true, the chip will be rendered with clickable styling.'
          },
          selected: {
            type: 'boolean',
            default: 'false',
            description: 'If true, the chip will appear selected.'
          },
          disabled: {
            type: 'boolean',
            default: 'false',
            description: 'If true, the chip will be disabled.'
          },
          tooltip: {
            type: 'string',
            description: 'Optional tooltip to show on hover.'
          },
          icon: {
            type: 'React.ReactNode',
            description: 'Icon element to display at the start.'
          },
          avatar: {
            type: 'React.ReactNode',
            description: 'Avatar element to display at the start.'
          },
          onDelete: {
            type: '() => void',
            description: 'Callback function when delete icon is clicked.'
          },
          onClick: {
            type: '(event: React.MouseEvent<HTMLDivElement>) => void',
            description: 'Callback function when chip is clicked.'
          }
        }
      }}
    />
  );
};

export default ChipModule;
