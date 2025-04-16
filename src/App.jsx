import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import NotFound from "./NotFound";
import Products from "./Products";
import Headers from "./Headers";
import Basket from "./Basket";
import ShowBasket from "./ShowBasket";
import {  QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Header from "./Header";

const App=()=> {
  const queryclient= new QueryClient()
  return (
    <div>
      <QueryClientProvider client={queryclient}>
<ReactQueryDevtools/>
      <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<HomePage/>}>
        <Route path="/header" element={<Header/>}/>
        </Route>
        <Route path="/Basket" element={<Basket/>}/>
        <Route path="/Basketpage" element={<ShowBasket/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="" element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
      </QueryClientProvider>
     
    </div>
  );
}

export default App;
