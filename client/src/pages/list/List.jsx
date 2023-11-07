import React, { useEffect, useState } from "react";
import "./list.css"; // Import the CSS file

function List({data}) {
  const[products,setProduct]=useState([])
  
 const fetchedData = async () => {
  await fetch("/products.json")
  .then((response)=>response.json())
  .then((data)=>setProduct(data))
  .catch((e)=>console.log(e.message))
 }
  useEffect(()=>{
  fetchedData();
  },[])
  return (
    <div className="product-list-container">
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <div className="product-item">
               <img src={product.imgSrc} />
               <img src={product.imgSrc} />
               <img src={product.imgSrc} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
