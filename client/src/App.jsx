import "./App.css";


import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import AppRoutes from "./routes/Routes"
import {nameContext , productContext} from "./context/context"

import { useState, useContext, useCallback ,useMemo} from "react";




export const useProducts = () => {
  const { products, setProducts } = useContext(productContext);
  return { products, setProducts };
};

function App() {
  const [name, setName] = useState("Chaouki");
  const [products, setProducts] = useState([]);
  const update = useCallback((v) => setProducts(v),[]);
  const ctxValue = useMemo(()=>({
    products,setProducts:update
  }), [products,update])
  return (
    <>
      <nameContext.Provider value={name}>
        <productContext.Provider value={ctxValue}>
          <Header />
            <AppRoutes/>
          <Footer />
        </productContext.Provider>
      </nameContext.Provider>
    </>
  );
}

export default App;
