import { useState, useEffect } from "react";

function useFetch(initialState) {
  const [data, setData] = useState(initialState);
  
  useEffect(() => {
      const fetchData= async(url)=>{
            await fetch(url)
              .then((res) => res.json())
              .then((d) => setData(d))
              .catch((e) => console.log(e.message));
      }
      fetchData("https://jsonplaceholder.typicode.com/todos")
  }, [setData]);
  console.log("fct Usefetch",data)
  return data;
}

export default useFetch;
