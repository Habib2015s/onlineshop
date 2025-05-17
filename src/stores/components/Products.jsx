import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import UseBasket from "../utils/UseBasket";
import {useWishlist} from "../utils/useWishlist";
import { getProducts } from "../../service/getProducts";

import SideBarModal from "../../Modals/SideBarModal";
import Stars from "../../icons/Stars";
import {Favorite} from "../../icons/Favorite";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faTrash } from "@fortawesome/free-solid-svg-icons";
import ExpandableText from "../utils/ExpandableText";

const Products = () => {
    
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  
  const wishlist = useWishlist((state) => state.itemIds);
  const cartItems = UseBasket((state) => state.items);

  const { isPending, data } = useQuery({
    queryKey: ["/products"],
    queryFn: () => getProducts(),
  });

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleProductClick = (productId) => {
    setSelectedProductId(productId);
    setIsOpen(true);
  };

  return (
    <div className="m-auto w-3/4">
      {isPending ? (
        "loading..."
      ) : (
        <div className=" grid grid-cols-1 mt-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mb-10 items-stretch">
          {data.data.map((item) => {
            const isFavorite = wishlist.includes(item.id);
            const isInCart = cartItems.some((cartItem) => cartItem.id === item.id);

            return (
              <div
                key={item.id}
                onClick={() => handleProductClick(item.id)}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                      className="relative w-[100%] h-[100%]  flex flex-col gap-y-3
                       bg-white p-2 shadow z-0 rounded-md hover:scale-101 cursor-pointer transition-transform "

              >
                <div className="w-full relative">
                  <img className="w-full p-14 aspect-square" src={item.image} alt="image" />
                
                    <Favorite  itemId={item.id}  isFavorite={isFavorite} />
                
                </div>

                <div className="flex flex-col h-full items-start gap-y-3">
                  <div className="flex justify-between w-full">
                    <h2 className="clamp-text w-3/5 text-lg">{item.title}</h2>
                    <h3 className="text-cyan-800 text-xl">{item.price}$</h3>
                  </div>
                  <ExpandableText  text={item.description} maxChars={100} />
                  <div className="mt-auto">
                    <Stars />
                  </div>
                </div>

                {hoveredId === item.id && (
                  <span
                    className={`absolute inset-0 z-0 ${
                      isInCart ? "bg-red-700/15" : "bg-green-700/15"
                    } rounded-md flex justify-center items-center transition-colors`}
                  >
                    <span
                      className={`w-20 h-20 bg-gray-100 flex  items-center justify-center rounded-full ${
                        isInCart ? "text-red-600" : "text-green-600"
                      } hover:scale-101 `}
                    >
                      {isInCart ? (
                        <FontAwesomeIcon icon={faTrash} size="xl" />
                      ) : (
                        <FontAwesomeIcon icon={faCartShopping} size="xl" />
                      )}
                    </span>
                  </span>
                )}
              </div>
            );
          })}
        </div>
      )}

      <SideBarModal
        visible={isOpen}
        onclose={handleCloseModal}
        productId={selectedProductId}
      />
    </div>
  );
};

export default Products;
