import { Button } from '@headlessui/react';

type props = {
  loadMore: number;
  setLoadMore: React.Dispatch<React.SetStateAction<number>>;
  enable: boolean;
};
export const LoadMore: React.FC<props> = (props) => {
  const { enable, loadMore, setLoadMore } = props;
  const handleLoadMore = () => {
    setLoadMore(loadMore + 1);
  };
  return (
    <Button
      onClick={handleLoadMore}
      disabled={!enable}
      className={`w-3/6 text-sm h-12 font-medium text-center border border-main-blue ${
        enable
          ? 'hover:opacity-50 hover:text-white hover:bg-main-blue'
          : 'opacity-50 cursor-not-allowed text-gray-400 bg-gray-200'
      }`}
    >
      LOAD MORE
    </Button>
  );
};
