import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getProductID } from "./service/productsapi"; 

const ProductDetails = ({ productId }) => {
    const ProductQuery = useQuery({
        queryKey: ['/products', productId],
        queryFn: () => getProductID(productId)
    });

    const product = ProductQuery?.data?.data;

    if (ProductQuery.isLoading) return <div>loading....</div>;
    if (ProductQuery.error) return <div>error: {ProductQuery.error.message}</div>;
    
    return (
        <div key={product.id}>
            <ul className="bg-slate-300 w-64 gap-3 p-8">
                <li>
                    <img className="w-44 h-52" src={product.image} alt="image"/>
                </li>
                <li>
                    <p className="text-cyan-800">{product.price}</p>
                </li>
                <li>
                    <p>{product.title}</p>
                </li>
                <li>
                    <p>{product.description}</p>
                </li>
            </ul>
        </div>
    );
}

export default ProductDetails;