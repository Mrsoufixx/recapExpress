import React from "react";
import "./list.css"; // Import the CSS file

function List({data}) {
  const products = data
  console.log("list",data)
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
