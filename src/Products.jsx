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
        <div>
            {pending ? ("loading..."):(
                
        
                <ul  className="bg-slate-300 w-64 flex flex-col gap-3 p-6 " >
                    {Show.map((data)=>{return(
                <>
                <li >< img className="w-44 h-52" src={data.image} alt="image" /></li>
                <li><p className="text-cyan-800">{data.price}</p> </li>
                <li ><p>{data.title}</p></li>
                <li><button className="border rounded-md bg-teal-500 p-1" 
                onClick={()=> actions.addToBasket(data)}>add item</button></li>
                
                </>
                    )
                })}
                
                </ul>
            )}

    
    </div>
    )
    
}
export default Products