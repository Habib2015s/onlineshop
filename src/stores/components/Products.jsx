import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import SideBarModal from "../../Modals/SideBarModal";
import { getProducts } from "../../service/getProducts";
import Stars from "../../icons/Stars";
import ExpandableText from "../utils/ExpandableText";
import useLikeCounter from "../../stores/useLikeCounter";
import { FaHeart } from "react-icons/fa"; // مطمئن شو نصب داری: npm i react-icons

const Products = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [activeProductId, setActiveProductId] = useState(null);

  const { data, isLoading, error } = useQuery({
    queryKey: ["/products"],
    queryFn: getProducts,
  });

  const increment = useLikeCounter((state) => state.increment);
  const likedItems = useLikeCounter((state) => state.likedItems);
  const toggleLike = useLikeCounter((state) => state.toggleLike);

  const handleProductClick = (productId) => {
    setSelectedProductId(productId);
    setActiveProductId(productId);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setActiveProductId(null);
  };

  const handleLikeClick = (e, productId) => {
    e.stopPropagation(); // جلوگیری از باز شدن مودال با کلیک روی قلب
    toggleLike(productId);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="m-auto w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
      {data.data.map((product) => {
        const isLiked = likedItems.includes(product.id);

        return (
          <div
            key={product.id}
            onClick={() => handleProductClick(product.id)}
            className={`relative cursor-pointer p-4 border rounded-md shadow-md hover:shadow-xl transition duration-300 flex flex-col`}
            style={{
              backgroundColor:
                activeProductId === product.id ? "#e0f7fa" : "white",
              borderColor:
                activeProductId === product.id ? "#00acc1" : "#ddd",
            }}
          >
            {/* آیکن قلب */}
            <button
              onClick={(e) => handleLikeClick(e, product.id)}
              className={`absolute top-3 right-3 text-xl transition-colors ${
                isLiked ? "text-red-500" : "text-gray-400 hover:text-red-500"
              }`}
              aria-label={isLiked ? "Remove from wishlist" : "Add to wishlist"}
            >
              <FaHeart />
            </button>

            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-contain mb-3"
            />
            <h2 className="text-lg font-semibold mb-1">{product.title}</h2>
            <p className="text-red-900 font-bold text-xl mb-2">{product.price}$</p>
            <ExpandableText text={product.description} maxChars={100} />
            <div className="mt-auto">
              <Stars />
            </div>
          </div>
        );
      })}

      <SideBarModal
        visible={isOpen}
        onclose={handleCloseModal}
        productId={selectedProductId}
      />
    </div>
  );
};

export default Products;
