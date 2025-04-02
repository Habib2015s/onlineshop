import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import NotFound from "./NotFound";
import Products from "./Products";
import Headers from "./Headers";
import Basket from "./Basket";
import ShowBasket from "./ShowBasket";


const App=()=> {
  return (
    <div>
      <BrowserRouter>
      <Headers/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/Basket" element={<Basket/>}/>
        <Route path="Basketpage" element={<ShowBasket/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="" element={<NotFound/>}/>
      
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
