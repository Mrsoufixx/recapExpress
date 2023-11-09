import "./list.css"; // Import the CSS file
import useFetch from "../../hooks/useFetch"
import Products from "./Products";

function List() {
  
  const { data } = useFetch("/products.json",[])
  console.log(data)
  
  return (
    <>
      <div className="product-list-container">
        <h1>Product List</h1>
        <ul className="product-list">
          <Products data={data} />
        </ul>
      </div>
    </>
  );
}

export default List;
