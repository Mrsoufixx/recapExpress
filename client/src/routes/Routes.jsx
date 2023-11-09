import React from "react";
import {Routes,Route} from "react-router-dom"
import Home from "../pages/home/Home";
import Product from "../pages/product/List";
import Form from "../pages/contact/Form";


function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Form />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
