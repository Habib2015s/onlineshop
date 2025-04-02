import axios from "axios";
import React, { useEffect, useState } from "react";
import UseBasket from "./UseBasket";
const Basket=({productdata})=>{
    const{actions}=UseBasket()
    const [Show, setShow] = useState([])
    const [pending, setpending] = useState(false)
    const {price,image,title}=productdata
    const fetch=()=>{
        setpending(true)
        axios
        .get("https://fakestoreapi.com/products")
        .then((result) => {
            setShow(result.data)
        }).catch((err) => {
            
        }).finally(()=>{
        setpending(false)
        })
    }
    useEffect(() => {
        fetch();
    }, [])
    return(
        <div>
            {pending ? ("loading..."):(
                
                
                
                <>
                <ul className="bg-slate-300 w-64 gap-3 p-8 " >
                <li><img className="w-44 h-52" src={image} alt="image"/></li>
                <li><p className="text-cyan-800">{price}</p> </li>
                <li ><p>{title}</p></li>
                <li><p>quantity: {productdata.quantity}</p></li>
                <li><button className="border rounded-md bg-red-800" 
                onClick={()=> actions.removeFromBasket(productdata)}>remove item</button></li>
                
                </ul>
                </>
                    )
                }
            
                
            

    
    </div>
    )
    
}
export default Basket