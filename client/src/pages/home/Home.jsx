import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../layouts/Header";




function Home() {

      const [count,setCount] = useState(0);
      
      function handlScore(action){
            switch(action){
                  case "increment" :
                        setCount(count+1)
                        break;
                  case "decrement" :
                        setCount((prev)=>prev-1)
                        break;
                  case "reset" :
                        setCount(0)
                        break;
                  default :
                        console.log("raje3 nafssak")
            }
      
      }
  return (
    <>
      <button onClick={()=>handlScore("increment")}>+</button>
      <button onClick={()=>handlScore("decrement")}>-</button>
      <button onClick={()=>handlScore("reset")}>reset</button>
      <h1>{count}</h1>
    <Link to="/product" >to product </Link>

    </>
  );
}

export default Home;
