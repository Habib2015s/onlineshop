import React, { useState } from "react";
import Call from "../icons/Call";
import Headers from "./Headers";
import OpenModal from "../OpenModal";
import ClickCardModal from "../Modals/ClickCartModal";
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

        <div className="w-screen p-4 h-12 flex bg-amber-600">
             

             <Call />
                <p className="text-white ">+91 (720) 090 1896</p>
             
            <div className="text-white text-center pl-96">
                <p >Get 50%  Off on Selected Items   |   Shop Now</p>

            </div>
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