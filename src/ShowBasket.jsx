import React from "react";
import Basket from "./Basket";
import UseBasket from "./UseBasket";
import { useQuery } from "@tanstack/react-query";
import { getProduct } from "./service/productsapi";
const ShowBasket=()=>{
    const {isPending,data,isStale}=useQuery({
        queryKey:["/products"],
        queryFn:getProduct,
        staleTime:3000,
    })
    console.log(isStale);
    const {invoice} =UseBasket()
    return(
        <div>
            <h3 className="text-cyan-600">
                {!isStale ? "data is fresh":"data is stale" }
            </h3>
            <h2>totalPrice: {invoice.totalPrice}</h2>
            {isPending?"loading":
            data.data.map((item)=>{
                return <Basket productdata={item} key={item.id}/>
            })} 
            {/* <h2>totalPrice: {invoice.totalPrice}</h2>
            {items.map((item)=>{
                return <Basket productdata={item} key={item.id}/>
            })} */}


        </div>
    )
}
export default ShowBasket