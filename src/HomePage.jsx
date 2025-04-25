import React from "react";
import Header from "./Header";
import Products from "./Products";
import Footer from "./Footer/Footer";

import TitleLogo from "./TitleLogo";


const HomePage=()=>{
    
    return(
        <div className="bg-slate-200">
            <Header/>
           <div  className=" w-[100%] h-[360px] bg-no-repeat flex justify-center items-center bg-center">
            <TitleLogo/>
            </div>
            <Products/>
            <Footer/>
        </div>
    )
}
export default HomePage