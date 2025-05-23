import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import NotFound from "./NotFound";
import Products from "./stores/components/Products";
import {  QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Header from "./headers/Header";
import ProductDetails from "./stores/components/ProductDetails";
import Login from "./stores/components/Login";

const App=()=> {
  const queryclient= new QueryClient()
  return (
    <div>
      <QueryClientProvider client={queryclient}>
<ReactQueryDevtools/>
      <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/" element={<HomePage/>}>
        <Route path="/header" element={<Header/>}/>
        </Route>
        <Route path="/products" element={<Products/>}/>
        <Route path="" element={<NotFound/>}/>
        <Route path="/products/:id" element={<ProductDetails/>}/>
      </Routes>
      </BrowserRouter>
      </QueryClientProvider>
     
    </div>
  );
}

export default App;
