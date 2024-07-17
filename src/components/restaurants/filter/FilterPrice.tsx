type Props = {
  priceRange?: string | null;
  setPriceRange: React.Dispatch<
    React.SetStateAction<string | null | undefined>
  >;
};

export const FilterPrice = (props: Props) => {
  const { setPriceRange } = props;

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPriceRange(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className="w-20 py-2 border-b">
      <select
        className="w-full"
        onChange={handleChange}
        name="priceRange"
        aria-label="Price Range"
      >
        <option value="all">Price</option>
        <option value="">All</option>
        <option value="$">$</option>
        <option value="$$">$$</option>
        <option value="$$$">$$$</option>
      </select>
    </div>
  );
};
