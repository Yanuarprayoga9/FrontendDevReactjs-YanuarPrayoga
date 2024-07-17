import { useEffect, useState } from 'react';
import { getCategories } from '../../../api/services';
import { Select } from '@headlessui/react';
type props = {
  category?: string | null;
  setCategory: React.Dispatch<React.SetStateAction<string | null>>;
};
export const FilterCategory = (props: props) => {
  const { category, setCategory } = props;
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await getCategories();
      setCategories(categories);
    };
    fetchCategories();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value);
  };

  return (
    <div className="w-22 py-2 border-b">
      <Select
        className="w-full bg-white"
        onChange={handleChange}
        value={category || ''}
        name="status"
      >
        <option value="">Category</option>
        <option value="">All</option>
        {categories &&
          categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
      </Select>
    </div>
  );
};
