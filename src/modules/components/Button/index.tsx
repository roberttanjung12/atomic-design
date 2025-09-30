import { DocView, Button } from '@/@dront/components';

import BasicExample from './ButtonBasic';
import basicExampleCode from './ButtonBasic?raw';
import DisabledExample from './ButtonDisabled';
import disabledExampleCode from './ButtonDisabled?raw';
import FullWidthExample from './ButtonFullWidth';
import fullWidthExampleCode from './ButtonFullWidth?raw';
import IconExample from './ButtonIcon';
import iconExampleCode from './ButtonIcon?raw';
import LoadingExample from './ButtonLoading';
import loadingExampleCode from './ButtonLoading?raw';
import OutlineStatesExample from './ButtonOutlineStates';
import outlineStatesExampleCode from './ButtonOutlineStates?raw';
import SolidStatesExample from './ButtonSolidStates';
import solidStatesExampleCode from './ButtonSolidStates?raw';
import TextStatesExample from './ButtonTextStates';
import textStatesExampleCode from './ButtonTextStates?raw';

const ButtonModule = () => {
  return (
    <DocView
      contributors={['Bagus Nur Solayman']}
      overview="The `Button` component is a versatile and accessible button with multiple variants, sizes, and states. It supports loading states, icons, and follows modern design principles while maintaining accessibility standards. Perfect for actions, forms, and interactive elements."
      sections={[
        {
          title: 'Basic Usage',
          descriptions:
            'A simple button with default settings. The button uses the solid variant, medium size, and primary color by default. This is the most common button type for primary actions.',
          example: <BasicExample />,
          exampleCode: basicExampleCode
        },
        {
          title: 'Solid Buttons',
          descriptions:
            'The solid variant provides a filled button with strong visual weight. Demonstrates all available sizes (XS to XL), interactive states, and color variants for the solid button style. Best for primary actions.',
          example: <SolidStatesExample />,
          exampleCode: solidStatesExampleCode
        },
        {
          title: 'Outline Buttons',
          descriptions:
            'The outline variant provides a transparent button with a colored border. On hover, it transforms to a solid style. Shows all sizes, states, and color variants. Perfect for secondary actions.',
          example: <OutlineStatesExample />,
          exampleCode: outlineStatesExampleCode
        },
        {
          title: 'Text Buttons',
          descriptions:
            'The text variant provides a minimal button style with no border and transparent background. Shows subtle background changes on hover and active states. Ideal for tertiary actions and links.',
          example: <TextStatesExample />,
          exampleCode: textStatesExampleCode
        },
        {
          title: 'Icon Buttons',
          descriptions:
            'Add icons to buttons using startIcon (left side) or endIcon (right side) props. Icons automatically adjust their size and alignment based on the button size for perfect visual harmony.',
          example: <IconExample />,
          exampleCode: iconExampleCode
        },
        {
          title: 'Loading State',
          descriptions:
            'The loading prop displays a spinner and disables interactions. Prevents double-clicks and provides visual feedback for asynchronous operations like API calls or form submissions.',
          example: <LoadingExample />,
          exampleCode: loadingExampleCode
        },
        {
          title: 'Disabled State',
          descriptions:
            'The disabled prop disables the button and applies appropriate styling. Disabled buttons are not interactive and have reduced opacity with proper accessibility attributes.',
          example: <DisabledExample />,
          exampleCode: disabledExampleCode
        },
        {
          title: 'Full Width',
          descriptions:
            'The fullWidth prop makes the button expand to fill its container width. Works with all variants and sizes, perfect for mobile layouts, forms, or when you need consistent button widths.',
          example: <FullWidthExample />,
          exampleCode: fullWidthExampleCode
        }
      ]}
      propsDoc={{
        component: Button,
        propDefinitions: {
          children: {
            type: 'ReactNode',
            required: true,
            description: 'The content to display inside the button. Can be text, icons, or other React elements.'
          },
          variant: {
            type: `'solid' | 'outline' | 'text'`,
            default: `'solid'`,
            description:
              'The visual style variant of the button. Solid provides filled buttons, outline gives bordered buttons, and text creates minimal buttons.'
          },
          size: {
            type: `'xs' | 'sm' | 'md' | 'lg' | 'xl'`,
            default: `'md'`,
            description:
              'The size of the button controlling height, padding, and font size. From xs (28px) to xl (48px) heights.'
          },
          color: {
            type: `'primary' | 'info' | 'success' | 'warning' | 'danger'`,
            default: `'primary'`,
            description:
              'The color theme of the button using design system color palette. Each color has distinct semantic meaning.'
          },
          disabled: {
            type: 'boolean',
            default: 'false',
            description:
              'Whether the button is disabled. Disabled buttons are non-interactive with reduced opacity and proper ARIA attributes.'
          },
          loading: {
            type: 'boolean',
            default: 'false',
            description:
              'Whether the button is in loading state. Shows a spinner, disables interactions, and prevents double-clicks during async operations.'
          },
          startIcon: {
            type: 'ReactNode',
            description:
              'Icon to display at the start (left) of the button content. Automatically sized and aligned with the button size.'
          },
          endIcon: {
            type: 'ReactNode',
            description:
              'Icon to display at the end (right) of the button content. Automatically sized and aligned with the button size.'
          },
          fullWidth: {
            type: 'boolean',
            default: 'false',
            description:
              'Whether the button should expand to fill its container width. Useful for mobile layouts and consistent button sizing.'
          },
          onClick: {
            type: '(event: MouseEvent<HTMLButtonElement>) => void',
            description: 'Click event handler function. Called when the button is clicked and not disabled or loading.'
          },
          'aria-label': {
            type: 'string',
            description:
              'Accessibility label for screen readers. Important when button content is not descriptive enough or contains only icons.'
          }
        }
      }}
    />
  );
};

export default ButtonModule;
