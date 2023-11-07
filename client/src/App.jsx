import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Form from "./pages/contact/Form";
import Layout from "./layouts/Layout";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<List />} />
          <Route path="/contact" element={<Form />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
