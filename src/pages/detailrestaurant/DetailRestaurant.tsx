import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRestaurant } from '../../api/services';
import { Restaurant } from '../../types';
import Container from '../../components/Container';
import { RatingReview } from '../../components/Rating';

const DetailRestaurant = () => {
    const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams<{ id: string }>();



    useEffect(() => {
        const fetchRestaurantById = async () => {
            setLoading(true);
            if (id) {
                const res = await getRestaurant(id)
                setRestaurant(res);
            }
            setLoading(false);
        };

        fetchRestaurantById();
    }, [id]);

    if (!id || !restaurant) {
        loading
        return <h1>error</h1>
    }
    return (
        <div className='w-full py-8 mih-h-screen '>
            <Container className='relative  flex items-center justify-center max-w-[500px] min-w-full  '>
                <img
                    src="https://plus.unsplash.com/premium_photo-1661953124283-76d0a8436b87?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D"
                    className=' -z-10 w-full rounded-3xl mx-auto object-cover h-[400px] md:h-[500px] lg:h-[600px]' />
                <div className="w-full z-10 rounded-3xl  absolute  top-0 bg-black opacity-50 h-[400px] md:h-[500px] lg:h-[600px]"
                    style={{ width: 'calc(100% - 40px)' }}
                ></div>
                <div className=" absolute z-20 sm:left-24  bottom-24 flex flex-col space-y-4">
                    <h1 className='text-4xl md:text-6xl text-white font-bold shadow-2xl'>{restaurant.name} <span className='text-lg'>({restaurant.rating})</span></h1>
                    <RatingReview className='shadow-xl' variant='gold' rating={restaurant.rating} />
                </div>
            </Container>
            <div className="w-full border border-y py-8 my-12 ">
                <Container className=''>
                    <h1 className='text-2xl '>
                        Reviews
                    </h1></Container>
            </div>
            <Container className=''>
                <h1 className="text-2xl" aria-label="All Reviews">All Review</h1>
            </Container>

        </div>
    );
};

export default DetailRestaurant;
