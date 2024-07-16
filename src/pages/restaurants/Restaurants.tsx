import { useEffect, useState } from "react";
import { Restaurant as RestaurantType } from "../../types";
import { getRestaurants } from "../../api/services";

const Restaurants = () => {
    const [restaurants, setRestaurants] = useState<RestaurantType[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchRestaurants = async () => {
            setLoading(true);
            try {
                const fetchedRestaurants = await getRestaurants();
                setRestaurants(fetchedRestaurants);
                console.log(fetchedRestaurants)
            } catch (error) {
                console.error("Error fetching restaurants:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchRestaurants();
    }, []);

    return (
        <div>
            <h1>halo</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {restaurants.map((restaurant) => (
                        <li key={restaurant.id}>
                            <h2>{restaurant.name}</h2>
                            <p>Category: {restaurant.category}</p>
                            <p>Rating: {restaurant.rating}</p>
                            {/* Add more details as needed */}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
export default Restaurants;
