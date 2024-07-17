import Container from '../../components/Container';
import { useEffect, useState } from 'react';
import { Restaurant as RestaurantType } from '../../types';
import { getRestaurants } from '../../api/services';
import { Jumbotron } from '../../components/restaurants/Jumbotron';
import { Filter } from '../../components/restaurants/filter/Filter';
import { RestaurantList } from '../../components/restaurants/RestaurantList';
import { LoadMore } from '../../components/restaurants/LoadMoreBtn';
import {
    applyFilters,
    getBooleanFromUrlParam,
    getUrlParam,
} from '../../utils/utils';

const Restaurants = () => {
    const [filteredRestaurants, setFilteredRestaurants] = useState<
        RestaurantType[]
    >([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [loadMore, setLoadMore] = useState<number>(1);

    // FILTER STATE
    const urlParams = new URLSearchParams(window.location.search);
    const [isOpen, setIsOpen] = useState<boolean | null | undefined>(
        getBooleanFromUrlParam(urlParams.get('isOpen'))
    );
    const [priceRange, setPriceRange] = useState<string | null | undefined>(
        getUrlParam('priceRange')
    );
    const [category, setCategory] = useState<string | null>(
        getUrlParam('category') || null
    );
    // FILTER STATE END

    useEffect(() => {
        const fetchRestaurants = async () => {
            setLoading(true);
            try {
                const fetchedRestaurants = await getRestaurants(loadMore, category);

                setFilteredRestaurants(
                    applyFilters(fetchedRestaurants, isOpen, priceRange)
                );
            } catch (error) {
                console.error('Error fetching restaurants:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchRestaurants();

        window.history.pushState(
            {},
            '',
            `?loadMore=${loadMore}&isOpen=${isOpen}&category=${category}&priceRange=${priceRange}
            `
        );
    }, [loadMore, isOpen, category, priceRange]);
    console.log(priceRange);

    return (
        <div className="h-screen w-full pb-52">
            <Container className="py-6">
                <Jumbotron
                    title="Restaurant"
                    desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, in, eligendi totam, maxime labore voluptates tempora sint libero repellat temporibus fugiat a sed corporis iure ea porro impedit inventore perferendis."
                />
            </Container>
            <Filter
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                category={category}
                setCategory={setCategory}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
            />
            <Container className="py-4">
                <h1 className="text-2xl">All Restaurants</h1>
                <RestaurantList restaurants={filteredRestaurants} loading={loading} />
            </Container>
            <Container className="py-4 flex justify-center">
                <LoadMore loadMore={loadMore} setLoadMore={setLoadMore} />
            </Container>
        </div>
    );
};
export default Restaurants;
