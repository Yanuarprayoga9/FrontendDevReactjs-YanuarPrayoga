import React from 'react';
import Container from '../../Container';
import { ClearAllBtn } from './ClearAllBtn';
import { FilterCategory } from './FilterCategory';
import { FilterOpenNow } from './FilterOpenNow';
import { FilterPrice } from './FilterPrice';

type Props = {
  isOpen?: boolean | null;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean | null | undefined>>;
  category?: string | null;
  setCategory: React.Dispatch<React.SetStateAction<string | null>>;
  priceRange?: string | null;
  setPriceRange: React.Dispatch<
    React.SetStateAction<string | null | undefined>
  >;
};

export const Filter: React.FC<Props> = React.memo((props) => {
  const {
    isOpen,
    setIsOpen,
    category,
    setCategory,
    priceRange,
    setPriceRange,
  } = props;

  return (
    <div className="w-full border border-y py-4">
      <Container className="flex flex-col sm:flex-row space-y-4 justify-between items-center">
        <div className="flex text-xs sm:text-sm justify-evenly gap-x-4 items-center">
          <span className="text-slate-700">Filter By:</span>
          <FilterOpenNow isOpen={isOpen} setIsOpen={setIsOpen} />
          <FilterPrice priceRange={priceRange} setPriceRange={setPriceRange} />
          <FilterCategory category={category} setCategory={setCategory} />
        </div>
        <ClearAllBtn setCategory={setCategory} setIsOpen={setIsOpen} setPriceRange={setPriceRange} />
      </Container>
    </div>
  );
});
