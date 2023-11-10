import React, { useContext } from 'react'
import { nameContext } from "../../context/context";
function Products({data}) {
      const name = useContext(nameContext)
      console.log(name)
  return (  
      <>
      {data.map((product,index) => (
            <li key={index} className="product-item">
              <h2>{product.model}</h2>
              <p>Price: ${product.price}</p>
              <p>category: {product.categorie}</p>
              <p>quantity: {product.quantity}</p>
              
              {/* Buttons for adding to cart and wishlist */}
              <div className="product-buttons">
                <button className="add-to-cart">Add to Cart</button>
                <button className="add-to-wishlist">Add to Wishlist</button>
              </div>
            </li>
          ))}
      </>
      
  )
}

export default Products