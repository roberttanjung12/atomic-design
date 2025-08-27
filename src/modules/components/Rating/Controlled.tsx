import { useState } from 'react';
import Rating from '@/@dront/components/Rating';

const ControlledRating = () => {
  const [rating, setRating] = useState(2);

  return <Rating length={5} value={rating} onChange={setRating} />;
};

export default ControlledRating;
