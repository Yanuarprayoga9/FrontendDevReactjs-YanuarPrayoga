import { Review } from '../../../types';
import { RatingReview } from '../../Rating';

export const ReviewCard = ({ name, image, rating, text }: Review) => {
  return (
    <div className="w-full h-[18rem]">
      <div className="w-full h-full  border-b py-4 flex flex-col justify-center">
        <h1 className="text-xl font-bold">{text}</h1>
        <RatingReview rating={rating} className="" variant="gold" />
        <p className="text-sm text-slate-500">{name} </p>
        <img
          className="w-3/6 border h-[10rem] rounded-lg object-cover"
          src={image}
          alt=""
        />
      </div>
    </div>
  );
};
