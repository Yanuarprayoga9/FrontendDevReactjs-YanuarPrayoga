import { Restaurant } from '../../types';
import { RestaurantCard } from './RestaurantCard';
import { RestaurantSkeleton } from './RestaurantSkeleton';

type props = {
  restaurants: Restaurant[];
  loading: boolean;
};
export const RestaurantList = ({ restaurants, loading }: props) => {
  return (
    <div className="flex flex-wrap w-full justify-between    items-center ">
      {loading && <RestaurantSkeleton cards={8} />}
      {restaurants ? (
        restaurants.map((restaurant: Restaurant, index) => (
          <RestaurantCard
            name={restaurant.name}
            category={restaurant.category}
            image={restaurant.image}
            isOpen={restaurant.isOpen}
            priceRange={restaurant.priceRange}
            rating={restaurant.rating}
            key={index}
          />
        ))
      ) : (
        <h1>Item not found</h1>
      )}
    </div>
  );
};
