import React, { use } from 'react';
import OrderCard from '../OrderCard';
import { OrderContext } from '../../Context/OrderContext';

const CurrentOrderSection = () => {
    const orderData = use(OrderContext)
    return (
        <>
        <div className='mt-5 px-5'>
           {
            orderData.map(order => <OrderCard key={order.id} order={order} />)
           }
        </div>
        </>
    );
};

export default CurrentOrderSection;