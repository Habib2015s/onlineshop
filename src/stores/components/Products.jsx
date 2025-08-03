import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import SideBarModal from "../../Modals/SideBarModal";
import { getProducts } from "../../service/getProducts";
import Stars from "../../icons/Stars";
import ExpandableText from "../utils/ExpandableText"; // فرض کردم داری این کامپوننت رو

const Products = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [activeProductId, setActiveProductId] = useState(null);

  const { data, isLoading, error } = useQuery({
    queryKey: ["/products"],
    queryFn: getProducts,
  });

  const handleProductClick = (productId) => {
    setSelectedProductId(productId);
    setActiveProductId(productId);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setActiveProductId(null);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="m-auto w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
      {data.data.map((product) => (
        <div
          key={product.id}
          onClick={() => handleProductClick(product.id)}
          className={`cursor-pointer p-4 border rounded-md shadow-md hover:shadow-xl transition duration-300 flex flex-col`}
          style={{
            backgroundColor: activeProductId === product.id ? "#e0f7fa" : "white",
            borderColor: activeProductId === product.id ? "#00acc1" : "#ddd",
          }}
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-48 object-contain mb-3"
          />
          <h2 className="text-lg font-semibold mb-1">{product.title}</h2>
          <p className="text-cyan-700 font-bold text-xl mb-2">{product.price}$</p>
          <ExpandableText text={product.description} maxChars={100} />
          <div className="mt-auto">
            <Stars />
          </div>
        </div>
      ))}

      <SideBarModal
        visible={isOpen}
        onclose={handleCloseModal}
        productId={selectedProductId}
      />
    </div>
  );
};

export default Products;
