import React, { useState } from "react";
import Call from "../icons/Call";
import Headers from "./Headers";
import OpenModal from "../OpenModal";
import ClickCardModal from "../Modals/ClickCartModal";
import { Link } from "react-router-dom";
import Login from "../stores/components/Login";
const Header=()=>{
    const modalStyles = {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "90%",
        maxWidth: "1000px",
        maxHeight: "70%",
        overflow: "auto"
        
      };
    const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);

    return(<div >

        <div className="w-full justify-between p-3 h-14 flex bg-amber-600">
             
<div className="flex">
             <Call />
                <p className="text-white ">+91 (720) 090 1896</p>

</div>
             
            <div className="text-white">
                <p >Get 50%  Off on Selected Items   |   Shop Now</p>

            </div>
           <Link to={"/Login"}>
            <button className="bg-white text-amber-600 w-20 mr-5  rounded-md p-1 text-xl">Sign in</button>
           </Link>
        </div>
            <Headers handleCartClick={()=> setCheckoutModalOpen(true)}/>
            <OpenModal 
            style={modalStyles}
            isOpen={checkoutModalOpen}
            onClose={() => setCheckoutModalOpen(false)}
            modalName={"modal"}>
            <ClickCardModal />
                    
            </OpenModal>
    </div>


    )
}
export default Header