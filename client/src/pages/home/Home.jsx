import { useEffect, useState } from "react";
import List from "../../components/productList/List";
import Form from "../../components/form/Form";


function Home({data}) {

      const [count,setCount] = useState(0);
      console.log("data",data);
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
      <List data={data}/>

    </>
  );
}

export default Home;
