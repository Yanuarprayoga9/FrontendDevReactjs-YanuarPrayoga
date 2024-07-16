export type Restaurant = {
  id: number;
  name: string;
  category: string;
  rating: number;
  priceRange: string;
  image: string;
  isOpen: boolean;
  reviews: Review[];
};

export type Review = {
  image: string;
  name: string;
  rating: number;
  text: string;
};
