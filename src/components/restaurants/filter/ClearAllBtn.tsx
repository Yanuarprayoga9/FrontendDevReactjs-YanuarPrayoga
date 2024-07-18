import { Button } from '@headlessui/react';
type props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean | null | undefined>>;
  setCategory: React.Dispatch<React.SetStateAction<string | null>>;
  setPriceRange: React.Dispatch<
    React.SetStateAction<string | null | undefined>
  >;
};
export const ClearAllBtn = (props:props) => {
  const {setCategory,setIsOpen,setPriceRange} = props;
  const handleClick = () => {
    setIsOpen(false);
    setCategory("");
    setPriceRange("");
    window.history.pushState(
      {},
      '',
      `?isOpen=${null}&category=${null}&priceRange=${null}
      `
    );
  };
  return (
    <Button
      onClick={handleClick}
      className=" border items-center gap-2  py-1 sm:py-2 px-4 text-sm/6 hover:bg-slate-50  text-slate-500  shadow-inner shadow-white/10 focus:outline-none"
    >
      CLEAR ALL
    </Button>
  );
};
