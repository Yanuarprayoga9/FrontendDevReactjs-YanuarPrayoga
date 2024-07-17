import { Button } from '@headlessui/react';

type props = {
  loadMore: number;
  setLoadMore: React.Dispatch<React.SetStateAction<number>>;
};
export const LoadMore = (props: props) => {
  const { loadMore, setLoadMore } = props;
  const handleLoadMore = () => {
    setLoadMore(loadMore + 1);
  };
  return (
    <Button
      onClick={handleLoadMore}
      className=" w-3/6 text-sm h-12 font-medium hover:opacity-50 hover:text-white border border-main-blue hover:bg-main-blue  text-center"
    >
      LOAD MORE
    </Button>
  );
};
