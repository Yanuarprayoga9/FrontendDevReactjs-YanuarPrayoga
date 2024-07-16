import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const RestaurantSkeleton = (props: { cards: number }) => {
    return (
        <>
            {[...Array(props.cards)].map((_item, index) => (
                <div key={index} className="relative hover:shadow-md px-2  h-[28rem] w-full  sm:w-1/2 md:w-1/3 lg:w-1/4 my-12">
                    <div className="w-full h-4/7">
                        <Skeleton className="  w-full h-[270px]" />
                    </div>
                    <div className="">
                        <div className="">
                            <Skeleton className="h-full w-full py-8 my-2" />
                            <div className="flex">
                                <Skeleton className="h-full w-full " />
                            </div>
                        </div>
                        <div className="flex justify-between items-center ">
                            <div className="flex text-sm">
                                <Skeleton className="h-full w-full py-4 my-2" />
                            </div>
                            <div className="flex">
                                <div className="flex justify-center items-center">               
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full absolute bottom-0 left-0 px-2">
                        <Skeleton className=" h-12   w-full max-w-full  text-white" />
                    </div>
                </div>
            ))}
        </>
    );
};
