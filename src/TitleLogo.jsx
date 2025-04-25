import React from "react";
const TitleLogo=()=>{
    return(
        <div className="w-[100%] h-[360px] bg-no-repeat flex justify-center items-center bg-center" 
        style={{backgroundImage:`url("https://s6.uupload.ir/files/offer-feature-banner_hjz_etfb.jpg")`,}}>
            
           <div className="text-center">

            <p className="w-[280px] text-3xl text-white m-5">Get 50% Off on Selected categories</p>
            <button className="text-xl bg-white text-red-700 px-8 py-1 
            rounded-3xl cursor-pointer hover:scale-102 transition-transform"> Shop Now</button>
            </div>
        </div>
    )
}
export default TitleLogo