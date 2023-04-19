import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";

let element = document.getElementById("root");
let root = ReactDOM.createRoot(element);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
