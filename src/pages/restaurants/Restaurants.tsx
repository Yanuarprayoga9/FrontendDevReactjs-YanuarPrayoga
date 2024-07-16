import { useEffect, useState } from 'react';
import { Restaurant as RestaurantType } from '../../types';
import { getRestaurants } from '../../api/services';
import { Jumbotron } from '../../components/restaurants/Jumbotron';
import { Filter } from '../../components/restaurants/filter/Filter';
import Container from '../../components/Container';
import { RestaurantList } from '../../components/restaurants/RestaurantList';

const Restaurants = () => {
    const [restaurants, setRestaurants] = useState<RestaurantType[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const fetchRestaurants = async () => {
        setLoading(true);
        try {
            const fetchedRestaurants = await getRestaurants();
            setRestaurants(fetchedRestaurants);
            console.log(fetchedRestaurants);
        } catch (error) {
            console.error('Error fetching restaurants:', error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchRestaurants();
    }, []);
    return (
        <div className="min-h-screen w-full ">
            <Container className="py-6">
                <Jumbotron
                    title="Restaurant"
                    desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, in, eligendi totam, maxime labore voluptates tempora sint libero repellat temporibus fugiat a sed corporis iure ea porro impedit inventore perferendis."
                />
            </Container>
            <Filter />
            <Container className="py-4">
                <h1 className="text-2xl">All Restaurants</h1>
                <RestaurantList restaurants={restaurants} loading={loading} />
            </Container>
        </div>
    );
};
export default Restaurants;
