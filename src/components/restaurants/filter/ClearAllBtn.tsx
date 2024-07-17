import { Button } from '@headlessui/react';

export const ClearAllBtn = () => {
  const handleClick = () => {
    window.history.pushState(
      {},
      '',
      `?loadMore=1&isOpen=${null}&category=${null}&priceRange=${null}
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
