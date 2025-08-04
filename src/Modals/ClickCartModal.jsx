import Basket from "../stores/utils/Basket";
import UseBasket from "../stores/utils/UseBasket";
import { useQuery } from "@tanstack/react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateLeft, faTruck } from "@fortawesome/free-solid-svg-icons";
import { getProductsById } from "../service/productsapi";
import { useEffect } from "react";

const ClickCardModal = () => {
  const items = UseBasket((state) => state.items);
  const setQuantity = UseBasket((state) => state.actions.setTotalQuantity);
  const totalPrice = UseBasket((state) => state.invoice.totalPrice);

  const ideas = items.map((item) => item.id);

  const productsByIdQuery = useQuery({
    queryKey: ["/productsbyid", ideas],
    queryFn: () => getProductsById(ideas),
    enabled: ideas.length > 0,
  });

  const products =
    productsByIdQuery.data
      ?.map((product) => {
        const foundProduct = items.find((item) => product.id === item.id);
        return foundProduct ? { ...product, quantity: foundProduct.quantity } : null;
      })
      .filter(Boolean) || [];

  useEffect(() => {
    const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
    setQuantity(totalQuantity);
  }, [items]);

  return (
    <div className="max-h-screen overflow-y-auto p-4 md:p-6 bg-gray-50">
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-5 lg:grid-rows-5">
        {/* Cart Detail */}
        <div className="lg:col-span-3 lg:row-span-3 bg-white border rounded-xl shadow-md p-4 sm:p-5 overflow-y-auto max-h-[400px]">
          <h2 className="text-base sm:text-lg font-bold mb-4">🛒 Cart Detail</h2>
          <ul className="space-y-4">
            {products.map((product) => (
              <li key={product.id}>
                <Basket product={product} />
              </li>
            ))}
          </ul>
        </div>

        {/* Delivery Info */}
        <div className="lg:col-span-3 lg:row-start-4 lg:row-span-2 bg-white border rounded-xl shadow-md p-4 sm:p-5">
          <h2 className="text-base sm:text-lg font-semibold mb-3">🚚 Delivery Information</h2>
          <address className="text-sm sm:text-base text-gray-600 leading-6 not-italic">
            John Smith<br />
            New Zealand<br />
            CrossRoad - PO25698<br />
            United States
          </address>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-2 lg:row-span-5 bg-white border rounded-xl shadow-md p-4 sm:p-5 flex flex-col">
          <h2 className="text-lg sm:text-xl font-bold mb-6">📦 Order Summary</h2>

          <div className="space-y-4 text-sm sm:text-base text-gray-700">
            <div className="flex justify-between">
              <span>Products Added</span>
              <span className="font-medium">{items.reduce((sum, i) => sum + i.quantity, 0)}</span>
            </div>
            <div className="flex justify-between">
              <span>Total Price</span>
              <span className="font-medium">{totalPrice}$</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>-</span>
            </div>
            <div className="flex justify-between text-lg font-bold text-red-700 pt-2 border-t mt-3">
              <span>Final Price</span>
              <span>{totalPrice}$</span>
            </div>
          </div>

          <div className="mt-auto space-y-5 bg-gray-100 rounded-lg p-4 text-sm sm:text-base text-gray-600 mt-6">
            <div className="flex items-start gap-x-4">
              <FontAwesomeIcon icon={faTruck} className="text-cyan-700 mt-1" />
              <div>
                <p className="font-medium text-black">Free Delivery</p>
                <p>For orders within 50 km</p>
              </div>
            </div>
            <div className="flex items-start gap-x-4">
              <FontAwesomeIcon icon={faRotateLeft} className="text-cyan-700 mt-1" />
              <div>
                <p className="font-medium text-black">Return Policy</p>
                <p>Within 5 days of delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClickCardModal;
