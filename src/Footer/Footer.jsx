import React from "react";
import UseBasket from "../stores/utils/UseBasket";
import BasketIcon from "../icons/BasketIcon";

const Footer=()=>{
     const {items}=UseBasket()
    const sumOfBasket=()=>{
        const sumqtn =items.reduce((acc,curr)=>acc+curr.quantity,0)
        return sumqtn
    }
    return(
        <div className="w-screen gap-6 pt-2 pl-10 text-white flex h-9 mb-0 bg-amber-600 bottom-0 fixed">
            <BasketIcon/>    
            <div>
                {sumOfBasket()}
                </div>
                 <p>Item in Your Basket</p>
        </div>
    )
}
export default Footer