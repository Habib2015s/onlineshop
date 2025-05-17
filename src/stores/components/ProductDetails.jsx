import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getProductID } from "../../service/productsapi"; 
import Stars from "../../icons/Stars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faCartShopping, faRotateLeft, faTruck} from "@fortawesome/free-solid-svg-icons";
import SetSize from "../../Sizes/SetSize";
import Counter from "../../store/Counter";
import UseBasket from "../utils/UseBasket";
const ProductDetails = ({ productId ,onclose}) => {
    const addToBasket = UseBasket(state=>state.actions.addToBasket);
    const totalPrice = UseBasket(state => state.invoice.totalPrice);
    const editItem = UseBasket(state => state.actions.editItem);    
    const setPrice = UseBasket(state => state.actions.setPrice);
    const [quantity, setQuantity] = useState(UseBasket(state => state.items.find((item) => item.id === productId)?.quantity) || 0);
    const ProductQuery = useQuery({
        queryKey: ['/products', productId],
        queryFn: () => getProductID(productId)
    });
    const handleClick=(amount)=> {
        if (amount > 0) {
            setQuantity((prev) => prev + amount < 999 ? prev + amount : prev);
        }
        else {
            setQuantity((prev) => prev + amount >= 0 ? prev + amount : prev)
        }
    }
    const handleSubmit=()=> {
        
        addToBasket({ id: product.id, price: product.price });
        setQuantity(1);
    }
    const handleChange=()=> {
        const newValue = Number();
        if (newValue) {
            setQuantity(newValue);
        }
        else {
            setQuantity(0);
        }
    }
    const product = ProductQuery?.data?.data;

    useEffect(() => {
        if (ProductQuery.isSuccess) {
             editItem({ id: product.id, quantity, price: product.price });
            setPrice();
        }
    }, [quantity]);  
    if (ProductQuery.isLoading) return <div>loading....</div>;
    if (ProductQuery.error) return <div>error: {ProductQuery.error.message}</div>;
    
    return (
        <div key={product.id}>
            <div className="w-[100%] justify-center">
                <div className="p-20">
                    <img className="w-[100%] aspect-square" src={product.image} alt="image"/>
                </div>
                <div className="flex justify-between items-center mb-5">

                <div className="w-[70%] text-xl">
                    <p>{product.title}</p>
                </div>
                <div>
                    <p className="text-cyan-800 text-xl">{product.price}$</p>
                </div>
                </div>
                <div className="text-sm text-gray-500 mb-3">
                    <p>{product.description}</p>
                </div>
                <Stars />
                <form onClick={handleSubmit} className="h-[100%] flex flex-col gap-y-10 py-2">
                     </form>
                <SetSize/>
                
                <div className="flex items-center gap-x-5 px-5 py-7">
                    <FontAwesomeIcon icon={faTruck} size="xl"/>
                    <div>
                        
                    <h3>Delivery Limit </h3>
                    <p>Free delivery within 50 km</p>
                    </div>
                </div>
                <div className="flex items-center gap-x-5 px-5 py-7">
                    <FontAwesomeIcon icon={faRotateLeft} size="xl"/>
                    <div>

                    <h3>Return Policy</h3>
                    <p>Within 5days of product delivery</p>
                    </div>
                </div>
                <div className="flex items-center justify-between">

                <div className="flex gap-x-5 items-center">
                { quantity > 0 ? 
    <Counter 
        quantity={quantity} 
        handleChange={() => handleChange()} 
        handleClick={handleClick} 
    /> 
    : 
    <button 
        disabled={!ProductQuery.isSuccess} 
        className="text-main-theme border-main-theme border rounded-2xl py-1 px-7 text-sm hover:bg-lime-500 hover:text-white transition-colors cursor-pointer disabled:opacity-50"
        onClick={handleSubmit}
    >
        Add to Cart
    </button>
}
                    <button className="text-sm cursor-pointer border rounded-2xl py-1 px-7 hover:bg-red-800 hover:text-white transition-colors "
                      onClick={onclose}>cancel</button>

                </div>
                <div>
                <FontAwesomeIcon icon={faCartShopping} size="xl" />
                <span>{totalPrice}$</span>
                </div>
                      </div>
               


            </div>
        </div>
    );
}

export default ProductDetails;