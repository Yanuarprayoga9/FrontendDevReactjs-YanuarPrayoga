import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRestaurant } from '../../api/services';
import { Restaurant } from '../../types';

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

    if (!id) {
        loading
        return <h1>error</h1>
    }
    return (
        <div>
            {!restaurant && <h1>error</h1>}
            {JSON.stringify(restaurant)}
        </div>
    );
};

export default DetailRestaurant;
