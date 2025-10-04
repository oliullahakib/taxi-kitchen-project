import React, { use } from "react";
import { ChefHat, CookingPot, ScrollText, TicketCheck } from "lucide-react";
import { CookingContext } from "../Context/CookingContext";
import { useNavigate } from "react-router";

const CookingStatusCard = () => {
  const navigate = useNavigate()
  const {cookingData}=use(CookingContext)
  const totalOrders = cookingData.length; 

  return (
    <div onClick={()=>navigate('/cooking')} className="border-4 border-dotted rounded-2xl border-warning p-5">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <CookingPot className="animate-pulse" color="#fcb700" size={100} />
        <div className="text-xl text-center">
          Current Cooking
          <h2 className="text-6xl font-bold">{totalOrders}</h2>
        </div>
      </div>
    </div>
  );
};

export default CookingStatusCard;