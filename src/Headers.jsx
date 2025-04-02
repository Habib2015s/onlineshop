import React from "react";
import { NavLink } from "react-router-dom";
import UseBasket from "./UseBasket";

const Headers=()=>{
    const {items}=UseBasket()
    const sumBasket=()=>{
        const sumqtn=items.reduce((acc,curr)=>acc+curr.quantity,0)
        return sumqtn
    }
    return(
        <div className="bg-zinc-600 flex justify-between p-4">
            <NavLink className={({isPending,isActive})=>
                isPending?"text-gray-300":
                isActive?"text-cyan-300":""
                }
                to={"/products"}>
                Home
            </NavLink>
            <NavLink className={({isActive,isPending})=>
            isPending ?"text-gray-300":
            isActive?"text-cyan-300":""
            }

             to={"/Basketpage"}
            >basket : {sumBasket()}
            </NavLink>
        </div>
    )
}
export default Headers