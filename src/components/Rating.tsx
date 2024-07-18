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
  const variantClasses = {
    gold: 'text-yellow-500',
    blue: 'text-main-blue',
  };
  return (
    <div className={className}>
      {[1, 2, 3, 4, 5].map((star, index) => {
        return (
          <span
            key={index}
            className={`start font-bold text-2xl cursor-pointer ${rating >= star ? variantClasses[variant] : 'text-white'}`}
          >
            ★
          </span>
        );
      })}
    </div>
  );
}
