import React from 'react';
import { Review } from '../../../types';
import { ReviewCard } from './ReviewCard'; // Adjust the path as needed

interface ReviewListProps {
  reviews: Review[];
  loading: boolean;
}

export const ReviewList: React.FC<ReviewListProps> = ({ reviews, loading }) => {
  if (loading) {
    return <div className="w-full sm:w-3/4">Loading...</div>;
  }

  return (
    <div className="w-full sm:w-3/4 space-y-2">
      {reviews.length === 0 ? (
        <div>No reviews available</div>
      ) : (
        reviews.map((review, index) => (
          <ReviewCard
            key={index}
            name={review.name}
            text={review.text}
            image={review.image}
            rating={review.rating}
          />
        ))
      )}
    </div>
  );
};
