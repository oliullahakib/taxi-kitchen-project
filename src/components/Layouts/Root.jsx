import React, { useState } from 'react';
import { Outlet } from 'react-router';
import { useLoaderData } from 'react-router';
import Navbar from '../Navbar';
import TitleSection from '../TitleSection';
import StatusCardsBox from '../StatusCardsBox';
import { OrderContext } from '../../Context/OrderContext';
import { CookingContext } from '../../Context/CookingContext';
import { ToastContainer } from 'react-toastify';

const Root = () => {
    const [cookingData, setCookingData] = useState([])
    console.log(cookingData)
    const orderData = useLoaderData()
    return (
        <CookingContext value={{cookingData,setCookingData}}>
            <OrderContext value={orderData}>
                <div>
                    <Navbar />
                    <TitleSection>Kitchen Room</TitleSection>
                    <StatusCardsBox />
                    <Outlet />
                </div>
                <ToastContainer/>
            </OrderContext>
        </CookingContext>
    );
};

export default Root;