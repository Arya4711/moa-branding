import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home.jsx";
import Services from "./components/Services.jsx";
import "./output.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Home />
    <Services />
  </React.StrictMode>,
);
