import React from "react";
import Header from "./Header";
import Products from "./Products";
import Footer from "./Footer/Footer";

const HomePage=()=>{
   
    
    return(
        <div className="bg-slate-200">
            <Header/>
            <Products />
            <Footer />
        </div>
    )
}
export default HomePage