import { Select } from '@headlessui/react';
import { useCallback } from 'react';

type props = {
  priceRange?: string | null;
  setPriceRange: React.Dispatch<
    React.SetStateAction<string | null | undefined>
  >;
};

export const FilterPrice: React.FC<props> = ({ priceRange, setPriceRange }) => {
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      setPriceRange(event.target.value);
      console.log(event.target.value);
    },
    [setPriceRange]
  );

  return (
    <div className="w-20 py-2 border-b">
      <label htmlFor="price-range-select" className="sr-only">
        Select Price Range
      </label>
      <Select
        id="price-range-select"
        className="w-full bg-white"
        onChange={handleChange}
        name="priceRange"
        value={priceRange || ''}
        aria-label="Price Range"
      >
        <option value="">Price</option>
        <option value="">All</option>
        <option value="$">$</option>
        <option value="$$">$$</option>
        <option value="$$$">$$$</option>
        <option value="$$$$">$$$$</option>
      </Select>
    </div>
  );
};
