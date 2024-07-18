import { useEffect, useState } from 'react';
import { getCategories } from '../../../api/services';
import { Select } from '@headlessui/react';

type Props = {
  category?: string | null;
  setCategory: React.Dispatch<React.SetStateAction<string | null>>;
};

export const FilterCategory = ({ category, setCategory }: Props) => {
  const [categories, setCategories] = useState<string[]>([]);
  
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const cachedCategories = localStorage.getItem('categories');
        if (cachedCategories) {
          setCategories(JSON.parse(cachedCategories));
        } else {
          const categories = await getCategories();
          setCategories(categories);
          localStorage.setItem('categories', JSON.stringify(categories));
        }
      } catch (error) {
        console.error('Failed to fetch categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value);
  };

  return (
    <div className="w-22 py-2 border-b">
      <label htmlFor="category-select" className="sr-only">Select Category</label>
      <Select
        id="category-select"
        className="w-full bg-white"
        onChange={handleChange}
        value={category || ''}
        name="category"
      >
        <option value="">Category</option>
        <option value="">All</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </Select>
    </div>
  );
};
