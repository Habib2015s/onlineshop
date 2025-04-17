import axios from "axios";
import React, { useEffect, useState } from "react";
import UseBasket from "./UseBasket";
import Like from "./icons/Like";
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
        <div className="m-auto w-3/4">
            {pending ? ("loading..."):(
                
        
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mb-10 items-stretch">
                    {Show.map((data)=>{return(

                
                <div  className="w-full h-[77vh] flex flex-col gap-y-3 bg-white p-2 shadow rounded-md hover:scale-101 cursor-pointer transition-transform relative">
                <div className="w-[100%] relative">
                <span className="absolute top-3 right-3 bg-white w-10 h-10 flex justify-center items-center rounded-full text-lg cursor-pointer 
                hover:scale-105 transition-transform pointer-events-auto z-5"><Like/></span>
                < img className=" w-[100%] p-6 aspect-square" src={data.image} alt="image" />
                </div> 
                <div className="flex justify-between w-[100%]">
                    <p>{data.title}</p>
                <p className="text-cyan-800">{data.price}$</p> 
                    </div>
                
                </div>
                    )
                })}
                
                </div>
            )}

    
    </div>
    )
    
}
export default Products