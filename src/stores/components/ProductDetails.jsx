import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getProductID } from "../../service/productsapi";
import Stars from "../../icons/Stars";
import SetSize from "../../Sizes/SetSize";
import Counter from "../../store/Counter";
import UseBasket from "../utils/UseBasket";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faRotateLeft, faTruck } from "@fortawesome/free-solid-svg-icons";

const ProductDetails = ({ productId, onclose }) => {
  const addToBasket = UseBasket((state) => state.actions.addToBasket);
  const editItem = UseBasket((state) => state.actions.editItem);
  const setPrice = UseBasket((state) => state.actions.setPrice);
  const totalPrice = UseBasket((state) => state.invoice.totalPrice);

  const [quantity, setQuantity] = useState(0);

  const { data, isLoading, error } = useQuery({
    queryKey: ['/products', productId],
    queryFn: () => getProductID(productId),
    enabled: !!productId,
  });

  const product = data?.data;

  useEffect(() => {
    if (product && quantity >= 0) {
      editItem({ id: product.id, quantity, price: product.price });
      setPrice();
    }
  }, [quantity, product]);

  const handleClick = (amount) => {
    setQuantity((prev) => {
      const newQty = prev + amount;
      return newQty >= 0 && newQty < 1000 ? newQty : prev;
    });
  };

  const handleSubmit = () => {
    addToBasket({ id: product.id, price: product.price });
    setQuantity(1);
  };

  if (isLoading) return <div className="p-4">Loading...</div>;
  if (error) return <div className="p-4 text-red-600">Error: {error.message}</div>;

  return (
    <div key={product?.id}>
      <img
        src={product?.image}
        alt="Product"
        className="w-full aspect-square object-contain p-6"
      />
      <h2 className="text-xl font-semibold mt-2">{product?.title}</h2>
      <p className="text-gray-600 text-sm mt-1">{product?.description}</p>
      <Stars />
      <div className="text-cyan-700 text-lg mt-2">{product?.price}$</div>

      <SetSize />

      <div className="mt-4">
        {quantity > 0 ? (
          <Counter quantity={quantity} handleChange={() => {}} handleClick={handleClick} />
        ) : (
          <button
            onClick={handleSubmit}
            className="bg-lime-500 text-white py-2 px-4 rounded hover:bg-lime-600"
          >
            Add to Cart
          </button>
        )}
        <button
          onClick={onclose}
          className="ml-4 text-sm text-gray-500 hover:text-red-500"
        >
          Cancel
        </button>
      </div>

      <div className="mt-6 space-y-4">
        <div className="flex items-center gap-3">
          <FontAwesomeIcon icon={faTruck} size="lg" />
          <span>Free delivery within 50km</span>
        </div>
        <div className="flex items-center gap-3">
          <FontAwesomeIcon icon={faRotateLeft} size="lg" />
          <span>Return within 5 days</span>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <FontAwesomeIcon icon={faCartShopping} />
        <span className="font-semibold">{totalPrice}$</span>
      </div>
    </div>
  );
};

export default ProductDetails;
