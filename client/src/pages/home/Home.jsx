// Home.js
import React, { useContext ,useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Header from "../../layouts/Header";
import './home.css';
import {useProducts} from '../../App'

function Home() {
      const { products, setProducts } = useProducts();
  

  console.log(products)
  const [count, setCount] = useState(0);

  function handleScore(action) {
    switch (action) {
      case "increment":
        setCount(count + 1);
        break;
      case "decrement":
        setCount((prev) => prev - 1);
        break;
      case "reset":
        setCount(0);
        break;
      default:
        console.log("raje3 nafssak");
    }
  }

  return (
    <div className="home-container">
      <button onClick={() => handleScore("increment")} className="home-button">
        +
      </button>
      <button onClick={() => handleScore("decrement")} className="home-button">
        -
      </button>
      <button onClick={() => handleScore("reset")} className="home-button">
        reset
      </button>
      <h1 className="home-heading">{count}</h1>
      <Link to="/product" className="home-link">
        to product
      </Link>
      {products ? (
        <div className="product-list">
          {/* Render your product data here */}
          {products.map((product, index) => (
            <div key={index}>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Home;
