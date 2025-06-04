import Minimal from "../icons/Minimal";
import AccountIcon from "../icons/AccountIcon";
import UseBasket from "../stores/utils/UseBasket";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Headers=({handleCartClick})=>{  
    
    const {items}=UseBasket()
    const sumOfBasket=()=>{
        const sumqtn =items.reduce((acc,curr)=>acc+curr.quantity,0)
        return sumqtn
    }
return(
    <div className=" px-[10px] md:px-[67px] bg-gray-100 flex justify-between items-center w-full mx-auto py-3 ">
    <div className="flex items-center gap-x-3">
    <div className="flex items-center">

        <Minimal/> 
        </div>
        <div className="flex items-center gap-x-6">

         <p>categories</p>
        <p>deals</p>
        <p>whats news</p>
        <p>delivery</p>
        </div>
         </div>
        <div className="flex items-center gap-x-2">
        <AccountIcon/>
        <p>accounts</p>
        <div className="flex items-center gap-x-2 border-2 border-transparent 
        px-3 py-1 rounded-md cursor-pointer" onClick={handleCartClick}>
         <FontAwesomeIcon icon={faShoppingCart} size="lg" />
         <p>cart</p>
         {sumOfBasket()}
        </div>
        </div>
           
                
            
                
        </div>
        
        
    )

}
export default Headers