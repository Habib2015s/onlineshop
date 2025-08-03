import React from "react";

const TitleLogo = () => {
  return (
    <div
      className="w-full h-60 md:h-[360px] bg-no-repeat bg-cover bg-center flex justify-center items-center"
      style={{
        backgroundImage: `url("https://s6.uupload.ir/files/offer-feature-banner_hjz_etfb.jpg")`,
      }}
    >
      <div className="text-center bg-black bg-opacity-40 px-4 py-6 rounded-md">
        <p className="text-white text-lg md:text-3xl max-w-xs md:max-w-md mx-auto mb-4">
          Get 50% Off on Selected Categories
        </p>
        <button
          className="text-sm md:text-xl bg-white text-red-700 px-6 md:px-8 py-2 rounded-3xl cursor-pointer hover:scale-105 transition-transform"
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default TitleLogo;
