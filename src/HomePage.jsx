import React from "react";
import Header from "./headers/Header";
import Products from "./stores/components/Products";
import Footer from "./Footer/Footer";
import TitleLogo from "./stores/components/TitleLogo";
const HomePage=()=>{
    
    
    return(
        <div className="bg-slate-200 w-full">
            <Header/>
           
            <TitleLogo/>
        
            <Products/>
            <Footer/>
        </div>
    )
}
export default HomePage