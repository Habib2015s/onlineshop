import React from "react";
import Header from "./Header";
import Products from "./Products";
import Footer from "./Footer/Footer";

import TitleLogo from "./TitleLogo";


const HomePage=()=>{
    
    return(
        <div className="bg-slate-200">
            <Header/>
           
            <TitleLogo/>
        
            <Products/>
            <Footer/>
        </div>
    )
}
export default HomePage