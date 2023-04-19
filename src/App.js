import React from "react";
import Layout from "./commoncompontet/Layout";
import { Routes, Route } from "react-router-dom";
import Dashbord from "./pages/Dashbord";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/dashboard" element={<Dashbord />} />
        <Route path="/add-products" element={<h3>add-products</h3>} />
        <Route path="/all-products" element={<h2>all-products </h2>} />
      </Routes>
    </Layout>
  );
}

export default App;
