import { useState, useEffect } from "react";

function useFetch(url, initialState) {
  const [data, setData] = useState(initialState);
  console.log(url)

  useEffect(() => {
    const fetchData = () => {
      fetch(url)
        .then((response) => response.json())
        .then((d) => setData(d))
        .catch((e) => console.log(e.message));
    };

    fetchData();
  }, [setData]);

  return { data } ;
}

export default useFetch;
