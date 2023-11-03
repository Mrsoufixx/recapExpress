import React from "react";
import "./list.css"; // Import the CSS file

function List(props) {
  const products = props.data;
  console.log("list",products)
  return (
    <div className="product-list-container">
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <div className="product-item">
              <img src={product.imgSrc} alt={product.name} />
              <h1>{product.name}</h1>
              <h2>{product.price}</h2>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
