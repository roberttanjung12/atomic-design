import Rating from '@/@dront/components/Rating';

/**
 * Rating with Labels Example
 *
 * Demonstrates how to add descriptive labels below each star using the labels prop.
 * This makes the rating component more user-friendly by clearly indicating what
 * each rating level represents, perfect for surveys and feedback forms.
 */
const RatingWithLabel = () => {
  return <Rating labels={['Very Bad', 'Bad', 'Average', 'Good', 'Excellent']} defaultValue={4} />;
};

export default RatingWithLabel;
