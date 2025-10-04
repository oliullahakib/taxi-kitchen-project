import React, { useState } from 'react';
import { Outlet } from 'react-router';
import { useLoaderData } from 'react-router';
import Navbar from '../Navbar';
import TitleSection from '../TitleSection';
import StatusCardsBox from '../StatusCardsBox';
import { OrderContext } from '../../Context/OrderContext';
import { CookingContext } from '../../Context/CookingContext';
import { ToastContainer } from 'react-toastify';
import { ReadyToServe } from '../../Context/readyToServeContex';

const Root = () => {
    const [cookingData, setCookingData] = useState([])
    const [readyToServe, setReadyToServe] = useState([])
    const orderData = useLoaderData()
    const [orders, setOrders] = useState(orderData)
    return (
        <ReadyToServe value={{readyToServe,setReadyToServe}}>
            <CookingContext value={{ cookingData, setCookingData }}>
                <OrderContext value={{orders,setOrders}}>
                    <div>
                        <Navbar />
                        <TitleSection>Kitchen Room</TitleSection>
                        <StatusCardsBox />
                        <Outlet />
                    </div>
                    <ToastContainer />
                </OrderContext>
            </CookingContext>
        </ReadyToServe>
    );
};

export default Root;