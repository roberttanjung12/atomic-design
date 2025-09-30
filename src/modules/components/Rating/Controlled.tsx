import { useState } from 'react';
import Rating from '@/@dront/components/Rating';

/**
 * Controlled Rating Example
 *
 * Demonstrates how to use the Rating component in controlled mode.
 * The parent component manages the rating state and can programmatically
 * control the rating value through the value and onChange props.
 */
const ControlledRating = () => {
  const [rating, setRating] = useState(2);

  return <Rating length={5} value={rating} onChange={setRating} />;
};

export default ControlledRating;
