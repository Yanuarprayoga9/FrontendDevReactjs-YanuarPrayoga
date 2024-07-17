import Container from '../../Container';
import { ClearAllBtn } from './ClearAllBtn';
import { FilterCategory } from './FilterCategory';
import { FilterOpenNow } from './FilterOpenNow';
import { FilterPrice } from './FilterPrice';

type props = {
    isOpen?:boolean | null;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean | null | undefined>>;
    category?:string | null;
    setCategory:React.Dispatch<React.SetStateAction<string | null >>;
    priceRange?:string | null;
    setPriceRange:React.Dispatch<React.SetStateAction<string | null | undefined>>;
}
export const Filter = (props:props) => {
  return (
    <div className="w-full border border-y py-6">
      <Container className="flex justify-between items-center">
        <div className="flex justify-evenly gap-x-4">
          <span className="text-slate-700">Filter By:</span>
          <FilterOpenNow />
          <FilterPrice />
          <FilterCategory />
        </div>
        <ClearAllBtn />
      </Container>
    </div>
  );
};
