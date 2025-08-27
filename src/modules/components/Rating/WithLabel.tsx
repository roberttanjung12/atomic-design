import Rating from '@/@dront/components/Rating';

const RatingWithLabel = () => {
  return <Rating labels={['Very Bad', 'Bad', 'Average', 'Good', 'Excellent']} defaultValue={4} />;
};

export default RatingWithLabel;
