import axios from "axios";
import React, { useEffect, useState } from "react";
import UseBasket from "./UseBasket";
const Products=({data})=>{
    
    const [Show, setShow] = useState([])
    const [pending, setpending] = useState(false)
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
    const {actions } = UseBasket()
    useEffect(() => {
        fetch();
    }, [])
    return(
        <div >
            {pending ? ("loading..."):(
                
        
                <div className=" z-0 w-4/5 ml-28 gap-3 p-6 grid grid-cols-4
                grid-rows-2  mt-28 ">
                    {Show.map((data)=>{return(
                <div  >
                < img className="w-44 h-52" src={data.image} alt="image" />
                <p className="text-cyan-800">{data.price}</p> 
                <p>{data.title}</p>
                
                </div>
                    )
                })}
                
                </div>
            )}

    
    </div>
    )
    
}
export default Products