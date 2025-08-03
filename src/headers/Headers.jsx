import { useState } from "react";
import Minimal from "../icons/Minimal";
import AccountIcon from "../icons/AccountIcon";
import UseBasket from "../stores/utils/UseBasket";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Headers = ({ handleCartClick }) => {
  const { items } = UseBasket();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sumOfBasket = () => {
    return items.reduce((acc, curr) => acc + curr.quantity, 0);
  };

  return (
    <>
      {/* هدر اصلی */}
      <div className="px-4 md:px-[67px] bg-gray-100 flex justify-between items-center w-full py-3">
        {/* چپ: لوگو یا آیکون منو */}
        <div className="flex items-center gap-x-4">
          {/* آیکون منو فقط در موبایل */}
          <button className="md:hidden" onClick={() => setSidebarOpen(true)}>
            <FontAwesomeIcon icon={faBars} size="lg" />
          </button>

          {/* لوگو یا برند */}
          <div className="hidden md:flex items-center">
            <Minimal />
          </div>
        </div>

        {/* منوی وسط، فقط در دسکتاپ */}
        <div className="hidden md:flex gap-x-6 text-base">
          <p className="cursor-pointer">Categories</p>
          <p className="cursor-pointer">Deals</p>
          <p className="cursor-pointer">What's New</p>
          <p className="cursor-pointer">Delivery</p>
        </div>

        {/* راست: آیکون‌ها */}
        <div className="flex items-center gap-x-4 text-sm md:text-base">
          <div className="flex items-center gap-x-1">
            <AccountIcon />
            <p className="cursor-pointer">Account</p>
          </div>

          <div
            className="flex items-center gap-x-2 border border-gray-300 hover:border-gray-500 px-3 py-1 rounded-md cursor-pointer"
            onClick={handleCartClick}
          >
            <FontAwesomeIcon icon={faShoppingCart} size="lg" />
            <p>Cart</p>
            {sumOfBasket() > 0 && (
              <span className="bg-amber-600 text-white text-xs rounded-full px-2 py-0.5">
                {sumOfBasket()}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* سایدبار موبایل */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex">
          {/* پنل سایدبار */}
          <div className="bg-white w-64 h-full p-5 flex flex-col gap-y-4 shadow-lg animate-slide-in-left">
            {/* بستن */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Menu</h2>
              <button onClick={() => setSidebarOpen(false)}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            {/* آیتم‌ها */}
            <p className="cursor-pointer">Categories</p>
            <p className="cursor-pointer">Deals</p>
            <p className="cursor-pointer">What's New</p>
            <p className="cursor-pointer">Delivery</p>
          </div>
          {/* برای بستن وقتی بیرون کلیک می‌شه */}
          <div className="flex-1" onClick={() => setSidebarOpen(false)}></div>
        </div>
      )}
    </>
  );
};

export default Headers;
