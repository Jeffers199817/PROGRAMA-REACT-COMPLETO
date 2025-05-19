import React from "react";
import ReactDOM from "react-dom/client";
import { FirstApp } from "./FirstApp";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
        <FirstApp /> {/* Omite title y subTitle para probar defaultProps */}
  </React.StrictMode>
);
