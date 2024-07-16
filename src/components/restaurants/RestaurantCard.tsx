import { Button } from '@headlessui/react';
import { toUpperCase } from '../../utils/utils';
import { RatingReview } from '../Rating';

type props = {
  name: string;
  rating: number;
  image: string;
  isOpen: boolean;
  priceRange: string;
  category: string;
};
export const RestaurantCard = (props: props) => {
  const { name, rating, image, isOpen, priceRange, category } = props;
  return (
    <div className="relative hover:shadow-md px-2  h-[28rem] w-full  sm:w-1/2 md:w-1/3 lg:w-1/4 my-12">
      <div className="w-full h-4/7">
        <img src={image} className="object-fill w-full h-[270px]" />
      </div>
      <div className="">
        <div className="">
          <h1 className="text-2xl line-clamp-2 my-1">{name}</h1>
          <div className="flex">
            <RatingReview rating={rating} />
          </div>
        </div>
        <div className="flex justify-between items-center ">
          <div className="flex text-sm">
            <span className="text-slate-500 text-sm">
              {toUpperCase(category)}
            </span>
            <span className="text-slate-500 ">•</span>
            <span className="text-slate-500 text-sm">{priceRange}</span>
          </div>
          <div className="flex">
            {isOpen ? (
              <div className="flex justify-center items-center">
                <span className="text-green-500 font-extrabold text-2xl ">
                  •
                </span>
                <span className="text-slate-500 text-sm">OPEN NOW</span>
              </div>
            ) : (
              <div className="flex justify-center items-center">
                <span className="text-red-500 font-extrabold text-2xl">•</span>
                <span className="text-slate-500 text-sm">CLOSED</span>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="w-full absolute bottom-0 left-0 px-2">
        <Button className=" h-12  hover:opacity-90 bg-main-blue w-full max-w-full  text-white">
          LEARN MORE
        </Button>
      </div>
    </div>
  );
};
