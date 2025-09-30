import Rating from '@/@dront/components/Rating';

/**
 * Disabled Rating Example
 *
 * Demonstrates the Rating component in disabled state. When disabled,
 * users cannot interact with the stars or change the rating value.
 * This is useful for displaying read-only ratings or in form submission states.
 */
const RatingDisabled = () => {
  return <Rating length={5} defaultValue={4} disabled />;
};

export default RatingDisabled;
