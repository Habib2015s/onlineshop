import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getProductID } from "./service/productsapi";
import SetID from "./stores/SetID";
import { getProducts } from "./service/getProducts";
const ProductDetails=()=>{
    const id = SetID(state => state.id);
    const ProductQuery=useQuery({
        queryKey: ['/productz',id],
        queryFn :()=> getProducts(id)
        
    },
)
const product = ProductQuery?.data?.data;
console.log(product);

        if (ProductQuery.isLoading) return <div>loading....</div>
        if (ProductQuery.error) return <div>error:{ProductQuery.error.message}</div>
        return (<div key={product.id}>

                    
            <ul className="bg-slate-300 w-64 gap-3 p-8 " >
            <li ><img className="w-44 h-52" src={product.image} alt="image"/></li>
            <li><p className="text-cyan-800">{product.price}</p> </li>
            <li ><p>{product.title}</p></li>
            {/* <li><p>quantity: {productdata.quantity}</p></li> */}
            {/* <li><button className="border rounded-md bg-red-800" 
            onClick={()=> actions.removeFromBasket(i)}>remove item</button></li> */}
            
            </ul>
            </div>

        )
            
        
    }
export default ProductDetails