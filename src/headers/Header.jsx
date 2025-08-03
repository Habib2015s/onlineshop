import React, { useState } from "react";
import Call from "../icons/Call";
import Headers from "./Headers";
import OpenModal from "../OpenModal";
import ClickCardModal from "../Modals/ClickCartModal";
import { Link } from "react-router-dom";

const Header = () => {
  const modalStyles = {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: "1000px",
    maxHeight: "70%",
    overflow: "auto",
  };

  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);

  return (
    <div>
      {/* نوار بالا */}
      <div className="w-full p-3 h-auto bg-amber-600 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        {/* تلفن */}
        <div className="flex items-center gap-2">
          <Call />
          <p className="text-white text-sm md:text-base">+91 (720) 090 1896</p>
        </div>

        {/* تبلیغات */}
        <div className="text-white text-center text-sm md:text-base">
          <p>Get 50% Off on Selected Items | Shop Now</p>
        </div>

        {/* دکمه ورود */}
        <div className="flex justify-end">
          <Link to="/Login">
            <button className="bg-white text-amber-600 w-20 rounded-md p-1 text-sm md:text-base">
              Sign in
            </button>
          </Link>
        </div>
      </div>

      {/* ناوبار پایین‌تر */}
      <Headers handleCartClick={() => setCheckoutModalOpen(true)} />

      {/* مدال سبد خرید */}
      <OpenModal
        style={modalStyles}
        isOpen={checkoutModalOpen}
        onClose={() => setCheckoutModalOpen(false)}
        modalName={"modal"}
      >
        <ClickCardModal />
      </OpenModal>
    </div>
  );
};

export default Header;
