import React, { useEffect, useState } from "react";
import Hero from "./Componants/Hero";
import MainCart from "./Componants/mainCart";
import ProductsCart from "./Componants/ProductsCart";
import Banar from "./Componants/Banar";
import Sarvices from "./Componants/Sarvices";



export default function App() {
  const [products, setProducts] = useState([]);
  const [mainCart, setMainCart] = useState([]);
  

  useEffect(() => {
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    fetch("/maincart.json")
      .then((res) => res.json())
      .then((data) => setMainCart(data));
  }, []);

   
  return (
    <div>
      <Hero />
      <MainCart mainCart={mainCart} />
      <Banar/>
      <ProductsCart products={products} />
      <Sarvices/>
      
       
    </div>
  );
}
