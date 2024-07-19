import { apiWithToken } from '.';

/**
 * Mendapatkan token akses dari localStorage
 * @returns {string} Token akses
 */
export function getAccessToken() {
  return (
    // localStorage.getItem('accessToken') ||
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNzIxMTEwMTY5fQ.4gUICvHm3L5ZffkEs5pdG-OBwVitwsvOsgCrN3OO-Fw'
  );
}

/**
 * Menyimpan token akses ke localStorage
 * @param {string} accessToken - Token akses yang akan disimpan
 */
export function putAccessToken(accessToken: string) {
  return localStorage.setItem('accessToken', accessToken);
}

/**
 * Mengambil daftar restoran
 * @param {number} show - Jumlah halaman yang akan ditampilkan
 * @param {string|null} [category] - Kategori untuk difilter
 * @returns {Promise<Array>} Daftar restoran
 */
export const getRestaurants = async (
  show: number,
  category?: string | null
) => {
  try {
    const limit = 8 * show;

    const params: { limit: number; category?: string } = { limit };

    // sorting di sisi server
    if (category && category != undefined) {
      params.category = category;
    }

    const res = await apiWithToken.get(`/restaurants`, { params });
    return res.data.data;
  } catch (error) {
    console.error('Failed to fetch restaurants:', error);
    return [];
  }
};

/**
 * Mengambil data restoran berdasarkan ID
 * @param {string} id - ID Restoran
 * @returns {Promise<Object|null>} Data restoran
 */
export const getRestaurant = async (id: string) => {
  try {
    const res = await apiWithToken.get(`/restaurants/${id}`);
    return res.data;
  } catch (error) {
    console.error('Failed to fetch restaurant:', error);
    return null;
  }
};

/**
 * Mengambil daftar kategori
 * @returns {Promise<Array>} Daftar kategori
 */
export const getCategories = async () => {
  try {
    const res = await apiWithToken.get(`/category`);
    return res.data.categories;
  } catch (error) {
    console.error('Failed to fetch categories:', error);
    return [];
  }
};

// export const login = async (username: string, password: string) => {
//   try {
//     const res = await apiWithoutToken.post(`/login`, { username, password });
//     const { accessToken } = res.data;
//     putAccessToken(accessToken);
//     return true;
//   } catch (error) {
//     console.error('Login failed:', error);
//     return false;
//   }
// };

// export const logout = () => {
//   localStorage.removeItem('accessToken');
// };
