import React from 'react';
import { Button } from '@headlessui/react';
import { toUpperCase } from '../../utils/utils';
import { RatingReview } from '../Rating';
import { useNavigate } from 'react-router-dom';

type Props = {
  id: number;
  name: string;
  rating: number;
  image: string;
  isOpen: boolean;
  priceRange: string;
  category: string;
};

export const RestaurantCard: React.FC<Props> = ({
  id,
  name,
  rating,
  image,
  isOpen,
  priceRange,
  category,
}) => {

  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/restaurants/${id}`)
  }

  return (
    <article

      className="relative hover:shadow-md px-2 h-[28rem] w-full sm:w-1/2 md:w-1/3 lg:w-1/4 my-12">
      <figure className="w-full h-4/7">
        <img
          src={image}
          alt={`Image of ${name}`}
          className="object-cover w-full h-[270px] max-h-[270px]"
          loading="lazy"
        />
      </figure>
      <div className="py-4">
        <header>
          <h2 className="text-2xl line-clamp-2 my-1">{name}</h2>
          <div className="flex">
            <RatingReview className='' variant='blue' rating={rating} />
          </div>
        </header>
        <div className="flex text-sm justify-between items-center my-2">
          <div className="flex text-slate-500">
            <span className="">{toUpperCase(category)}</span>
            <span className=" mx-1">•</span>
            <span className="">{priceRange}</span>
          </div>
          <div className="flex items-center">
            <span
              className={`${isOpen ? 'text-green-500' : 'text-red-500'} font-extrabold text-2xl mr-1`}
            >
              •
            </span>
            <span className="text-slate-500 text-sm">
              {isOpen ? 'OPEN NOW' : 'CLOSED'}
            </span>
          </div>
        </div>
      </div>
      <div className="w-full absolute bottom-0 left-0 px-2">
        <Button onClick={handleClick} className="h-12 hover:opacity-90 bg-main-blue w-full max-w-full text-white">
          LEARN MORE
        </Button>
      </div>
    </article>
  );
};

