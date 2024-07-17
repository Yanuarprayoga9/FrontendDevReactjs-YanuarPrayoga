import { Select } from "@headlessui/react";

type Props = {
  priceRange?: string | null;
  setPriceRange: React.Dispatch<
    React.SetStateAction<string | null | undefined>
  >;
};

export const FilterPrice = (props: Props) => {
  const { setPriceRange,priceRange } = props;

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPriceRange(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className="w-20 py-2 border-b">
      <Select
        className="w-full bg-white"
        onChange={handleChange}
        name="priceRange"
        value={priceRange || ""}
        aria-label="Price Range"
      >
        <option value="">Price</option>
        <option value="">All</option>
        <option value="$">$</option>
        <option value="$$">$$</option>
        <option value="$$$">$$$</option>
      </Select>
    </div>
  );
};
