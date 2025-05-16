import React, { useRef} from "react";
import { createPortal } from "react-dom";
import Close from "../icons/Close";
import { useClickOutside } from "./ClickOutSide/ClickOutIn";
import ProductDetails from "../stores/components/ProductDetails";

const SideBarModal=({visible,onclose,productId,handleCloseModal})=>{
    
    const ModalRef= useRef(null);
    useClickOutside(ModalRef,onclose);
    if(!visible){return null}
    return(createPortal(
        <div className="w-full h-screen bg-black/30 flex justify-center items-center fixed top-0 left-0">
            <div ref={ModalRef} className="bg-white p-5 rounded-xl absolute z-50 overflow-y-auto top-5 bottom-5 left-5 right-5 md:w-[60%] md:max-w-[500px] md:left-auto ">
           <button onClick={onclose}>
            <Close /> </button> 
            <div>
            

                <ProductDetails onclose={handleCloseModal} productId={productId}  />
            
            
                </div>   
        </div>

            </div>
        ,document.body)
    )
}
export default SideBarModal