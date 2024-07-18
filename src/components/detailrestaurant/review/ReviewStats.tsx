import { RatingReview } from '../../Rating';

export const ReviewStats = ({
  mean,
  length,
}: {
  mean: number;
  length: number;
}) => {
  return (
    <div className="w-full sm:w-1/2 border-b-2 sm:border-none">
      <div className="flex">
        <RatingReview className="" rating={mean} variant="gold" />
        <h1 className="text-2xl">({mean})</h1>
      </div>
      <p className="text-slate-500">{length} review</p>
    </div>
  );
};
