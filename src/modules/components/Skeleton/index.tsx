import { DocView, Skeleton } from '@/@dront/components';
import SkeletonBasic from './SkeletonBasic';
import basicExampleCode from './SkeletonBasic?raw';
import SkeletonLine from './SkeletonLine';
import lineExampleCode from './SkeletonLine?raw';
import SkeletonSize from './SkeletonSize';
import sizeExampleCode from './SkeletonSize?raw';
import SkeletonVariant from './SkeletonVariant';
import variantExampleCode from './SkeletonVariant?raw';

const SkeletonModule = () => {
  return (
    <DocView
      contributors={['Rafli Rai Rizky']}
      overview="Skeleton is a lightweight placeholder component that mimics the structure of content while data is being loaded. It helps maintain layout stability and provides a smooth shimmer animation to indicate loading state."
      sections={[
        {
          title: 'Basic',
          descriptions:
            'The basic usage of the Skeleton component. By default, it renders a rounded rectangle placeholder with a smooth shimmer animation.',
          example: <SkeletonBasic />,
          exampleCode: basicExampleCode
        },
        {
          title: 'Variant',
          descriptions:
            'Use the `variant` prop to define the shape of the skeleton placeholder. Supported values are `square`, `rounded`, `circular`, and `text`.',
          example: <SkeletonVariant />,
          exampleCode: variantExampleCode
        },
        {
          title: 'Size',
          descriptions:
            'You can control the skeleton dimensions using the `width` and `height` props. These accept both numbers (pixels) and strings (e.g., `100%`, `10rem`).',
          example: <SkeletonSize />,
          exampleCode: sizeExampleCode
        },
        {
          title: 'Lines',
          descriptions:
            'When using `variant="text"`, the `lines` prop allows you to define how many text-line placeholders to render. Each line simulates a loading paragraph structure.',
          example: <SkeletonLine />,
          exampleCode: lineExampleCode
        }
      ]}
      propsDoc={{
        component: Skeleton,
        propDefinitions: {
          variant: {
            type: 'square | rounded | circular | text',
            description:
              'Defines the visual shape of the skeleton placeholder.`square`: renders a hard-edged rectangle. `rounded`: renders a rectangle with smooth corners. `circular`: renders a perfect circle. `text`: renders multiple lines mimicking text blocks.',
            default: 'rounded'
          },
          width: {
            type: 'number | string',
            description:
              'Specifies the width of the skeleton placeholder. Can be a fixed number (pixels) or a CSS string such as `100%`, `10rem`, etc.',
            default: '100'
          },
          height: {
            type: 'number | string',
            description:
              'Defines the height of the skeleton placeholder. Ignored if `variant="text"` since height is automatically handled for text lines.',
            default: '100'
          },
          lines: {
            type: `number`,
            description:
              'Determines how many lines to display when using `variant="text"`. Useful for simulating paragraphs or multiple text rows.',
            default: '1'
          }
        }
      }}
    />
  );
};

export default SkeletonModule;
