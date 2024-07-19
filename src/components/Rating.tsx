import StarRatings from 'react-star-ratings';

type RatingReviewProps = {
  rating: number;
  className: string;
  variant?: 'gold' | 'blue';
};

export function RatingReview({
  rating,
  className,
  variant = 'blue',
}: RatingReviewProps) {
  const starRatedColor =
    variant === 'gold' ? 'rgb(255, 215, 0)' : 'rgb(36, 7, 80)';

  return (
    <div className={className}>
      <StarRatings
        rating={rating}
        starRatedColor={starRatedColor}
        numberOfStars={5}
        name="rating"
        starDimension="18px"
        starSpacing="1px"
      />
    </div>
  );
}
