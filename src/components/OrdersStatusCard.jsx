import React, { use } from "react";
import { ChefHat, CookingPot, ScrollText, TicketCheck } from "lucide-react";
import { OrderContext } from "../Context/OrderContext";
import { useNavigate } from "react-router";

const OrderStatusCard = () => {
  const navigate = useNavigate()
  const {orders} = use(OrderContext)
  const totalOrders = orders.length; 

  return (
    <div onClick={()=>navigate('/')} className="border-4 border-dotted rounded-2xl border-warning p-5">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <ScrollText className="animate-pulse" color="#fcb700" size={100} />
        <div className="text-xl text-center">
          Current Orders
          <h2 className="text-6xl font-bold">{totalOrders}</h2>
        </div>
      </div>
    </div>
  );
};

export default OrderStatusCard;