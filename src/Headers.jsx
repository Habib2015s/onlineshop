import React from "react";
import Minimal from "./icons/Minimal";
import BigPic from "./icons/BigPic";
import AccountIcon from "./icons/AccountIcon";
import UseBasket from "./UseBasket";

const Headers=({ClickCard})=>{
    const NumberCount=UseBasket(state => state.Items.reduce((total, item) => total + item.quantity, 0));
    return(
        <div className=" flex   m-auto p-8 w-4/5 h-max bg-slate-200 ">
            <div className=" flex w-3/4 mt-4 gap-10 justify-start bg-amber-600 fixed p-5">
            
               <Minimal/> 
                <p>categories</p>
                <p>deals</p>
                <p>whats news</p>
                <p>delivery</p>
                <div className="flex ml-72 gap-5">
                    <AccountIcon/>
                    <p>accounts</p>
                    <div onClick={ClickCard} className={`${NumberCount ? "border-secondary-theme" : "border-transparent"} px-3 py-1 rounded-md cursor-pointer`}>
                    cart
                    </div>
                </div>
            </div>
                <div >
                    
                    {/* <BigPic/> */}
                    </div>
            {/* <Products/> */}
        </div>

    )
    // const {items}=UseBasket()
    // const sumBasket=()=>{
    //     const sumqtn=items.reduce((acc,curr)=>acc+curr.quantity,0)
    //     return sumqtn
    // }
    // return(<div className="flex justify-center">

    //     <div className="bg-zinc-600 w-2/3  flex justify-between p-4">
    //         <NavLink className={({isPending,isActive})=>
    //             isPending?"text-gray-300":
    //         isActive?"text-cyan-300":""
    //     }
    //     to={"/products"}>
    //             Home
    //         </NavLink>
    //         <NavLink className={({isActive,isPending})=>
    //         isPending ?"text-gray-300":
    //         isActive?"text-cyan-300":""
    //     }
        
    //     to={"/Basketpage"}
    //     >basket : {sumBasket()}
    //         </NavLink>
    //     </div>
    //     </div>
    // )
}
export default Headers