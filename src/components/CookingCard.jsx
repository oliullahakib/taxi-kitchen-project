import { use } from "react";
import { ReadyToServe } from "../Context/readyToServeContex";
import { toast } from "react-toastify";
import { OrderContext } from "../Context/OrderContext";
import { CookingContext } from "../Context/CookingContext";

const CookingCard = ({ order }) => {
    const { readyToServe, setReadyToServe } = use(ReadyToServe)
    const { orders, setOrders } = use(OrderContext)
    const { cookingData, setCookingData} = use(CookingContext)
    return (
        <div
            className="rounded-xl p-5 shadow hover:shadow-lg"
            style={{
                background: "linear-gradient(#ffffff90, #FCB700), url('/cook-bg.gif')",
            }}
        >
            {/* Title */}
            <h3 className="text-xl font-bold text-primary mb-2">
                {order.order_title}
            </h3>

            {/* Quantity */}
            <p className="text-lg font-semibold">
                Quantity: <span className="text-gray-700">{order.quantity}</span>
            </p>

            {/* Special Instruction */}
            <p className="text-xs text-gray-600 mt-2 italic">
                {order.special_instruction}
            </p>

            {/* Static Button */}
            <button onClick={() => {
                if(readyToServe.includes(order)){
                    toast.error("Item is Alreay Served")
                }else{

                    setReadyToServe((prev) => [...prev, order])
                    toast.success("Item is Ready To Serve")
                }
                const filteredOrders=orders.filter(item=>item!==order)
                setOrders(filteredOrders)
                const filteredCookingData =cookingData.filter(item=>item!==order)
                setCookingData(filteredCookingData)
            }} className="px-6 mt-3 py-1 shadow text-sm hover:bg-black hover:text-white bg-white cursor-pointer rounded-xl">
                Cooked?
            </button>
        </div>
    );
};

export default CookingCard;