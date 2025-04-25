import UseBasket from "./UseBasket";
import Like from "./icons/Like";
import Stars from "./icons/Stars";
import SideBarModal from "./Modals/SideBarModal";
import { getProducts } from "./service/getProducts";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const Products = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedProductId, setSelectedProductId] = useState(null);
    
    const handleCloseModal = () => {
        setIsOpen(false);
    }
    
    const { isPending, data } = useQuery({
        queryKey: ["/products"],
        queryFn: () => getProducts(),
    });
    
    const { actions } = UseBasket();
    
    const handleProductClick = (productId) => {
        setSelectedProductId(productId);
        setIsOpen(true);
    };
    
    return (
        <div className="m-auto w-3/4">
            {isPending ? ("loading...") : (
                <div className="grid grid-cols-1 mt-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mb-10 items-stretch">
                    {data.data.map((item) => (
                        <div 
                            key={item.id}
                            onClick={() => handleProductClick(item.id)}
                            className="w-[100%] h-[100%] flex flex-col gap-y-3 bg-white p-2 shadow rounded-md hover:scale-101 cursor-pointer transition-transform relative"
                        >
                            <div className="w-[100%] relative">
                                <span className="absolute top-3 right-3 bg-white w-10 h-10 flex justify-center items-center rounded-full text-lg cursor-pointer hover:scale-105 transition-transform pointer-events-auto z-5">
                                    <Like />
                                </span>
                                <img className="w-[100%] p-8 aspect-square" src={item.image} alt="image" />
                            </div>
                            <div className="flex flex-col h-[100%] items-start gap-y-3">
                                <div className="flex justify-between w-[100%]">
                                    <h2 className="clamp-text w-[60%] text-lg">{item.title}</h2>
                                    <h3 className="text-cyan-800 text-xl">{item.price}$</h3>
                                </div>
                                <div className="clamp-text text-sm text-gray-500">{item.description}</div>
                                <div className="mt-auto">
                                    <Stars />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            <SideBarModal 
                visible={isOpen} 
                onclose={handleCloseModal} 
                productId={selectedProductId}
            />
        </div>
    );
}

export default Products;