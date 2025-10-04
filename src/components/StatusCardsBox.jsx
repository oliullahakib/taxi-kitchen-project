import React from 'react';
import CurrentOrdersCard from './OrdersStatusCard';
import CurrentCookingCard from './CookingStatusCard';
import ReadyToServeCard from './ReadyToServeCard';
const StatusCardsBox = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3 px-5 cursor-pointer'>
            <CurrentOrdersCard/>
            <CurrentCookingCard/>
            <ReadyToServeCard/>
        </div>
    );
};

export default StatusCardsBox;