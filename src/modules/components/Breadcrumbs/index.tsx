import { DocView } from '@/@dront/components';
import Breadcrumbs from '@/@dront/components/Breadcrumbs';
import BreadcrumbsBasic from './BreadcrumbsBasic';
import breadcrumbsBasicCode from './BreadcrumbsBasic?raw';
import BreadcrumbsIcon from './BreadcrumbsIcon';
import breadcrumbsIconCode from './BreadcrumbsIcon?raw';
import BreadcrumbsSeparator from './BreadcrumbsSeparator';
import breadcrumbsSeparatorCode from './BreadcrumbsSeparator?raw';
import BreadcrumbsVariant from './BreadcrumbsVariant';
import breadcrumbsVariantCode from './BreadcrumbsVariant?raw';

const BreadcrumbsModule = () => {
  return (
    <DocView
      contributors={['Agung Laksono Hartadi']}
      overview={
        'The `Breadcrumbs` component provides a navigational hierarchy that helps users understand their current location within the site structure. It displays links back to previous pages, enabling quick navigation. Commonly used at the top of pages, especially in dashboards, documentation, or multi-level navigation systems.'
      }
      sections={[
        {
          title: 'Basic',
          descriptions:
            'A simple breadcrumb trail with text-based navigation. Commonly used to show the current page context within a site structure.',
          example: <BreadcrumbsBasic />,
          exampleCode: breadcrumbsBasicCode
        },
        {
          title: 'Custom separator',
          descriptions:
            'Breadcrumbs support custom separators. You can replace the default chevron with strings, icons, or any React element to match your design requirements.',
          example: <BreadcrumbsSeparator />,
          exampleCode: breadcrumbsSeparatorCode
        },
        {
          title: 'Breadcrumbs with icons',
          descriptions:
            'Breadcrumb items can include icons alongside labels. Icons can be positioned either to the left or right of the text, improving clarity and visual hierarchy.',
          example: <BreadcrumbsIcon />,
          exampleCode: breadcrumbsIconCode
        },
        {
          title: 'Breadcrumbs Variant',
          descriptions:
            'Use the `variant` prop to switch between `text` and `contained` styles. The contained style displays breadcrumb items as chip-like elements for stronger emphasis.',
          example: <BreadcrumbsVariant />,
          exampleCode: breadcrumbsVariantCode
        }
      ]}
      propsDoc={{
        component: Breadcrumbs,
        propDefinitions: {
          items: {
            type: 'BreadcrumbItem[]',
            description:
              'Array of breadcrumb items to render. Each item may include a label, optional href (for navigation), an icon, and icon position.',
            required: true
          },
          color: {
            type: 'string',
            description: 'Custom color for the breadcrumb text and active state. Defaults to the theme’s primary color.'
          },
          variant: {
            type: "'text' | 'contained'",
            description:
              "Controls the visual style of breadcrumb items. `'text'` renders plain text links, while `'contained'` wraps items with a chip-like background."
          },
          separator: {
            type: 'ReactNode',
            description:
              'Custom separator element between breadcrumb items. Defaults to a right-chevron icon (`ChevronRightIcon`).'
          },
          slotProps: {
            type: '{ root?: BreadcrumbsProps; }',
            description:
              'Allows customization of the underlying Material UI Breadcrumbs root component. Use this to override default props such as `maxItems`, `itemsBeforeCollapse`, or styling overrides.'
          }
        }
      }}
    />
  );
};

export default BreadcrumbsModule;
