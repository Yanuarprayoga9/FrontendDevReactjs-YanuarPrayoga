import { Restaurant } from '../types';

/**
 * Mengubah string menjadi huruf kapital
 * @param {string} str - String yang akan diubah
 * @returns {string} String huruf kapital
 */
export function toUpperCase(str: string) {
  return str.toUpperCase();
}

/**
 * Mendapatkan nilai parameter URL
 * @param {string} param - Nama parameter
 * @returns {string|null} Nilai parameter atau null
 */
export const getUrlParam = (param: string) => {
  const urlParams = new URLSearchParams(window.location.search);
  const value = urlParams.get(param);
  // here
  return value == 'null' || null ? null : value;
};

/**
 * Mendapatkan boolean dari parameter URL
 * @param {string|null} param - Nama parameter
 * @returns {boolean|null} Nilai boolean atau null
 */
export const getBooleanFromUrlParam = (
  param: string | null
): boolean | null => {
  // saat didapat menjadi 'true' bukan boolean
  if (param === 'true') return true;
  return null;
};

/**
 * Menerapkan filter ke restoran disisi client
 * @param {Restaurant[]} restaurants - Daftar restoran
 * @param {boolean|null} [isOpen] - Filter berdasarkan status buka
 * @param {string|null} [priceRange] - Filter berdasarkan rentang harga
 * @returns {Restaurant[]} Daftar restoran yang telah difilter
 */
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
