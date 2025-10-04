import React, { use } from 'react';
import { CookingContext } from '../../Context/CookingContext';
import CookingCard from '../CookingCard';

const CurrentCookingSection = () => {
    const {cookingData}=use(CookingContext)
    console.log(cookingData)
    return (
        <div>
         {
            cookingData.map(order=><CookingCard key={order.id} order ={order}/>)
         }
        </div>
    );
};

export default CurrentCookingSection;