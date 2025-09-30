import { DocView } from '@/@dront/components';
import Rating from '@/@dront/components/Rating';
import RatingBasic from './Basic';
import ratingBasicCode from './Basic?raw';
import ControlledRating from './Controlled';
import controlledRatingCode from './Controlled?raw';
import RatingDisabled from './Disabled';
import ratingDisabledCode from './Disabled?raw';
import RatingWithLabel from './WithLabel';
import ratingWithLabelCode from './WithLabel?raw';

const RatingComp = () => {
  return (
    <DocView
      contributors={['Nanda Yusuf Nur Pratama']}
      overview={
        'The `Rating` component provides an intuitive interface for displaying and selecting rating values, typically represented by interactive stars. It supports both controlled and uncontrolled usage patterns, custom labels for each rating level, hover effects for better user experience, and a disabled state for read-only scenarios. Perfect for feedback forms, product reviews, and user satisfaction surveys.'
      }
      sections={[
        {
          title: 'Basic',
          descriptions:
            'This example demonstrates the basic usage of the `Rating` component in uncontrolled mode. The component displays 5 stars with an initial default value of 3. Users can click on any star to change the rating, and the component will maintain its own internal state.',
          example: <RatingBasic />,
          exampleCode: ratingBasicCode
        },
        {
          title: 'Controlled',
          descriptions:
            'This example shows how to use the `Rating` component in controlled mode using the `value` and `onChange` props. The parent component maintains the rating state and can programmatically control the rating value. This is useful when you need to integrate the rating with forms or external state management.',
          example: <ControlledRating />,
          exampleCode: controlledRatingCode
        },
        {
          title: 'With Labels',
          descriptions:
            'This example demonstrates how to add descriptive labels below each star using the `labels` prop. When labels are provided, they help users understand what each rating level represents, making the component especially useful for surveys, feedback forms, and detailed review systems.',
          example: <RatingWithLabel />,
          exampleCode: ratingWithLabelCode
        },
        {
          title: 'Disabled State',
          descriptions:
            "The `disabled` prop can be set to `true` to disable all user interactions with the rating component. This creates a read-only display that's perfect for showing ratings without allowing changes, useful in confirmation screens or when displaying historical rating data.",
          example: <RatingDisabled />,
          exampleCode: ratingDisabledCode
        }
      ]}
      propsDoc={{
        component: Rating,
        propDefinitions: {
          disabled: {
            type: 'boolean',
            description:
              'If `true`, disables all interactions with the rating component. Users cannot click on stars or change the rating value.',
            default: 'false'
          },
          labels: {
            type: 'string[]',
            description:
              'Array of labels to display below each star. When provided, the number of labels determines how many stars are shown, and the `length` prop is ignored. Each label corresponds to its respective star position.'
          },
          length: {
            type: 'number',
            description:
              'Number of stars to display in the rating component. This prop is ignored when `labels` array is provided, as the length is determined by the number of labels.',
            default: '0'
          },
          defaultValue: {
            type: 'number',
            description:
              'Initial rating value for uncontrolled usage. This sets the default selected rating when the component first renders. Use this when you want the component to manage its own state.',
            default: '0'
          },
          value: {
            type: 'number',
            description:
              'Controlled rating value. When this prop is provided, the component becomes fully controlled and will not manage its own internal state. Must be used together with `onChange` for proper functionality.'
          },
          onChange: {
            type: '(value: number) => void',
            description:
              'Callback function fired when the rating value changes. Receives the new rating value as a parameter. Required when using the component in controlled mode with the `value` prop.'
          }
        }
      }}
    />
  );
};

export default RatingComp;
