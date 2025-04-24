import React, { useState } from "react";
import Minimal from "./icons/Minimal";
import AccountIcon from "./icons/AccountIcon";
import UseBasket from "./UseBasket";
import ClickCardModal from "./Modals/ClickCartModal";

const Headers=()=>{

    
    const [isOpen, setisOpen] = useState(false)
    const handleCloseModal=()=>{
        setisOpen(false)
    }
    const {items}=UseBasket()
    const sumOfBasket=()=>{
        const sumqtn =items.reduce((acc,curr)=>acc+curr.quantity,0)
        return sumqtn
    }
    return(
        <div className=" flex  m-auto  w-4/5 h-max bg-slate-200 ">
            <div className=" flex  gap-10 justify-start bg-slate-200  p-5">
            
               <Minimal/> 
                <p>categories</p>
                <p>deals</p>
                <p>whats news</p>
                <p>delivery</p>
                <div className="flex ml-72 gap-5">
                    <AccountIcon/>
                    <p>accounts</p>
                </div>
                    <div onClick={()=>{setisOpen(true)}}>
                    cart {sumOfBasket()}
                    </div>
            </div>
            <ClickCardModal visible={isOpen} onclose={handleCloseModal}/>
            
                
        </div>
        
        
    )

}
export default Headers