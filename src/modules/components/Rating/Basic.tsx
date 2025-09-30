import Rating from '@/@dront/components/Rating';

/**
 * Basic Rating Example
 *
 * Demonstrates the simplest usage of the Rating component in uncontrolled mode.
 * Shows 5 stars with a default value of 3, allowing users to click and change the rating.
 */
const RatingBasic = () => {
  return <Rating length={5} defaultValue={3} />;
};

export default RatingBasic;
