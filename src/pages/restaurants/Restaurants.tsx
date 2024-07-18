import Container from '../../components/Container';
import { useEffect, useState, useCallback, useMemo } from 'react';
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

  const fetchRestaurants = useCallback(async () => {
    setLoading(true);
    const fetchedRestaurants = await getRestaurants(loadMore, category);
    setFilteredRestaurants(
      applyFilters(fetchedRestaurants, isOpen, priceRange)
    );
    setLoading(false);
  }, [loadMore, category, isOpen, priceRange]);

  useEffect(() => {
    fetchRestaurants();
    window.history.pushState(
      {},
      '',
      `?&isOpen=${isOpen}&category=${category}&priceRange=${priceRange}`
    );
  }, [fetchRestaurants, loadMore, isOpen, category, priceRange]);

  const filteredRestaurantsMemo = useMemo(
    () => filteredRestaurants,
    [filteredRestaurants]
  );

  return (
    <div className="h-screen w-full pb-52">
      <Container className="py-6">
        <Jumbotron
          title="Restaurant"
          desc="Discover the best restaurants in town. Find your favorite cuisine and enjoy a delightful meal."
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
        <h1 className="text-2xl" aria-label="All Restaurants">
          All Restaurants
        </h1>
        <RestaurantList
          restaurants={filteredRestaurantsMemo}
          loading={loading}
        />
      </Container>
      <Container className="py-4 flex justify-center">
        <LoadMore loadMore={loadMore} setLoadMore={setLoadMore} />
      </Container>
    </div>
  );
};

export default Restaurants;
