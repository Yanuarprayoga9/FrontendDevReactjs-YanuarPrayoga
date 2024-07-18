type RatingReviewProps = {
  rating: number;
  className: string;
  variant?: 'gold' | 'blue'; // Add the variant prop
};

export function RatingReview({ rating, className, variant = 'blue' }: RatingReviewProps) {
  // Define styles for different variants
  const variantClasses = {
    gold: 'text-yellow-500', // Define the styles for gold variant
    blue: 'text-main-blue', // Define the styles for blue variant
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