import { memo } from 'react';
import { Restaurant } from '../../types';
import { RestaurantCard } from './RestaurantCard';
import { RestaurantSkeleton } from './RestaurantSkeleton';

type props = {
  restaurants: Restaurant[];
  loading: boolean;
};

export const RestaurantList: React.FC<props> = ({ restaurants, loading }) => {
  return (
    <div className="flex flex-wrap w-full justify-evenly">
      {loading ? (
        <RestaurantSkeleton cards={4} />
      ) : restaurants.length > 0 ? (
        restaurants.map((restaurant: Restaurant) => (
          <MemoizedRestaurantCard
            id={restaurant.id}
            name={restaurant.name}
            category={restaurant.category}
            image={restaurant.image}
            isOpen={restaurant.isOpen}
            priceRange={restaurant.priceRange}
            rating={restaurant.rating}
            key={restaurant.id}
          />
        ))
      ) : (
        <h1 className="py-4">Restaurant not found</h1>
      )}
    </div>
  );
};

const MemoizedRestaurantCard = memo(RestaurantCard);
