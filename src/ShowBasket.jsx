import React from "react";
import Basket from "./Basket";
import UseBasket from "./UseBasket";
const ShowBasket=()=>{
    const {invoice,items} =UseBasket()
    return(
        <div>
            <h2>totalPrice: {invoice.totalPrice}</h2>
            {items.map((item)=>{
                return <Basket productdata={item} key={item.id}/>
            })}


        </div>
    )
}
export default ShowBasket