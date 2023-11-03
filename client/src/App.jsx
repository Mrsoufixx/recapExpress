import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/home/Home";



function App() {
  const[product,setProduct]=useState("")
  console.log(product)
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
    <>
      <Home data={product}/>
    </>
  );
}

export default App;