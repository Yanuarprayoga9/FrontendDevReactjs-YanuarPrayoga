import { Restaurant } from '../types';

export function toUpperCase(str: string) {
  return str.toUpperCase();
}
export const getUrlParam = (param: string) => {
  const urlParams = new URLSearchParams(window.location.search);
  const value = urlParams.get(param);
  return value == 'null' || null ? null : value;
};
export const getBooleanFromUrlParam = (
  param: string | null
): boolean | null => {
  if (param === 'true') return true;
  return null;
};

export const applyFilters = (
  restaurants: Restaurant[],
  isOpen?: boolean | null,
  priceRange?: string | null
) => {
  let filteredRestaurants = restaurants;
  if (isOpen !== null && isOpen != false) {
    filteredRestaurants = filteredRestaurants.filter(
      (restaurant) => restaurant.isOpen === isOpen
    );
  }
  if (priceRange !== null && priceRange !== undefined && priceRange !== '') {
    filteredRestaurants = filteredRestaurants.filter(
      (restaurant) => restaurant.priceRange === priceRange
    );
  }
  return filteredRestaurants;
};
