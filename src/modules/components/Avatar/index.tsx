import { DocView } from '@/@dront/components';
import Avatar from '@/@dront/components/Avatar';
import AvatarBasic from './AvatarBasic';
import basicExampleCode from './AvatarBasic?raw';
import AvatarGroup from './AvatarGroup';
import groupExampleCode from './AvatarGroup?raw';
import AvatarMax from './AvatarMax';
import maxExampleCode from './AvatarMax?raw';
import AvatarOnClick from './AvatarOnClick';
import onClickExampleCode from './AvatarOnClick?raw';
import AvatarRandomColor from './AvatarRandomColor';
import randomColorExampleCode from './AvatarRandomColor?raw';
import AvatarScale from './AvatarScale';
import scaleExampleCode from './AvatarScale?raw';
import AvatarSize from './AvatarSize';
import sizeExampleCode from './AvatarSize?raw';
import AvatarSpacing from './AvatarSpacing';
import spacingExampleCode from './AvatarSpacing?raw';
import AvatarSurplus from './AvatarSurplus';
import surplusExampleCode from './AvatarSurplus?raw';
import AvatarTotal from './AvatarTotal';
import totalExampleCode from './AvatarTotal?raw';
import AvatarVariant from './AvatarVariant';
import variantExampleCode from './AvatarVariant?raw';

const AvatarModule = () => {
  return (
    <DocView
      contributors={['Rafli Rai Rizky']}
      overview="The `Avatar` component is a reusable UI element used to visually represent a user, profile, or entity within the application. It typically displays a user's image, initials, or an icon as a recognizable identity marker. The component supports various sizes, fallback states, and styling options, making it useful in lists, headers, or profile sections to enhance personalization and visual clarity."
      sections={[
        {
          title: 'Basic',
          descriptions:
            'Shows basic usage of the `Avatar` component with an image, a name that generates initials, and an icon. Each avatar supports a click action.',
          example: <AvatarBasic />,
          exampleCode: basicExampleCode
        },
        {
          title: 'Size',
          descriptions:
            "The size prop controls the `Avatar`'s dimensions. Available options are `small`, `medium`, and `large`.",
          example: <AvatarSize />,
          exampleCode: sizeExampleCode
        },
        {
          title: 'Variant',
          descriptions: 'The `variant` prop allows you to switch between `square`, `rounded`, or `circular`.',
          example: <AvatarVariant />,
          exampleCode: variantExampleCode
        },
        {
          title: 'Group',
          descriptions:
            'Displays multiple avatars as a group using the Avatar component. Each avatar can represent an image, initials, or an icon, and they are automatically arranged within an avatar group layout. If the `img` property is empty, the `alt` text will be displayed as initials instead.',
          example: <AvatarGroup />,
          exampleCode: groupExampleCode
        },
        {
          title: 'Max',
          descriptions: 'Demonstrates how to limit the number of visible avatars in a group using the ``max` prop.',
          example: <AvatarMax />,
          exampleCode: maxExampleCode
        },
        {
          title: 'Total',
          descriptions:
            'Shows how to display the total number of avatars in a group using the `total` prop. This allows indicating the overall count without needing to render all avatar items from the data array.',
          example: <AvatarTotal />,
          exampleCode: totalExampleCode
        },
        {
          title: 'Surplus',
          descriptions:
            'Demonstrates how to use the `surplus` prop to format large total values in an avatar group. When the total exceeds 1000, it automatically shortens the number.',
          example: <AvatarSurplus />,
          exampleCode: surplusExampleCode
        },
        {
          title: 'Spacing',
          descriptions:
            'Shows how to adjust the space between avatars in a group using the `spacing` prop. It supports predefined values like `small` and `medium`, or you can provide a custom number to define precise spacing between avatars.',
          example: <AvatarSpacing />,
          exampleCode: spacingExampleCode
        },
        {
          title: 'Random Background Color',
          descriptions:
            'Shows how to enable random background colors for avatars without images using the `randomColor` prop. Each avatar without an image will be assigned.',
          example: <AvatarRandomColor />,
          exampleCode: randomColorExampleCode
        },
        {
          title: 'Scale',
          descriptions: 'Adds a hover animation that scales and slightly lifts the avatar when enabled.',
          example: <AvatarScale />,
          exampleCode: scaleExampleCode
        },
        {
          title: 'On Click',
          descriptions:
            "Shows different ways to handle click events using the `onClick` prop in the Avatar component. You can define custom behavior for each avatar group from a simple click alert, retrieving the clicked avatar's index, accessing its data (like alt), or even handling extended custom data such as `id`, `role`, and `isActive`.",
          example: <AvatarOnClick />,
          exampleCode: onClickExampleCode
        }
      ]}
      propsDoc={{
        component: Avatar,
        propDefinitions: {
          src: {
            type: 'string | AvatarItem<T> | AvatarItem<T>[] | ReactNode',
            description:
              'The source content for the avatar. Can be an image URL, a name string (to generate initials), an icon element, or an array to display multiple avatars.',
            required: true
          },
          alt: {
            type: 'string',
            description:
              'Alternative text for the avatar. Used for accessibility and for generating initials when no image is provided.',
            required: true
          },
          max: {
            type: 'number',
            description:
              'Limits the number of visible avatars when displaying a group. Extra avatars are hidden and represented by a “+x” indicator.'
          },
          total: {
            type: 'number',
            description:
              'Displays the total number of avatars in a group, regardless of how many are actually rendered.'
          },
          surplus: {
            type: 'boolean',
            default: 'false',
            description:
              'If true, large total numbers are abbreviated (e.g., 1000 to 1k, 2500 to 2k). Used together with the `total` prop.'
          },
          size: {
            type: "'small' | 'medium' | 'large'",
            default: 'medium',
            description: 'Sets the avatar size. Adjusts both the dimensions and font size of the avatar.'
          },
          spacing: {
            type: "'number' | 'small' | 'medium'",
            default: 'medium',
            description:
              'Defines the space between avatars in a group. Accepts predefined values or a custom numeric value.'
          },
          variant: {
            type: "'square' | 'rounded' | 'circular'",
            default: 'circular',
            description: 'Determines the avatar shape square, rounded corners, or circular.'
          },
          randomColor: {
            type: 'boolean',
            default: 'false',
            description: 'If true, assigns a random background color to avatars without an image source.'
          },
          scale: {
            type: 'boolean',
            default: 'false',
            description: 'Enable hover scale animation for the avatar.'
          },
          onClick: {
            type: '(item?: AvatarItem<T>, index?: number) => void',
            description:
              'Callback function triggered when an avatar is clicked. Provides the clicked avatar data and its index in the group.'
          }
        }
      }}
    />
  );
};

export default AvatarModule;
