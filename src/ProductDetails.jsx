import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getProductID } from "./service/productsapi"; 
import Stars from "./icons/Stars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faRotateLeft, fas, faTruck} from "@fortawesome/free-solid-svg-icons";
import SetSize from "./Sizes/SetSize";

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
            <div className="w-[100%] justify-center ">
                <div className="p-20">
                    <img className="w-[100%] aspect-square" src={product.image} alt="image"/>
                </div>
                <div className="flex justify-between items-center mb-5">

                <div className="w-[70%] text-xl">
                    <p>{product.title}</p>
                </div>
                <div>
                    <p className="text-cyan-800 text-xl">{product.price}</p>
                </div>
                </div>
                <div className="text-sm text-gray-500 mb-3">
                    <p>{product.description}</p>
                </div>
                <Stars />
                <form  className="h-[100%] flex flex-col gap-y-10 py-2">
                    
                <SetSize/>
                
                <div className="flex items-center gap-x-5 px-5 py-2">
                    <FontAwesomeIcon icon={faTruck} size="xl"/>
                    <div>
                        
                    <h3>Delivery Limit </h3>
                    <p>Free delivery within 50 km</p>
                    </div>
                </div>
                <div className="flex items-center gap-x-5 px-5 py-2">
                    <FontAwesomeIcon icon={faRotateLeft} size="xl"/>
                    <div>

                    <h3>Return Policy</h3>
                    <p>Within 5days of product delivery</p>
                    </div>
                </div>

                </form>

            </div>
        </div>
    );
}

export default ProductDetails;