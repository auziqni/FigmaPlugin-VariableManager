import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import { App } from "./main";

ReactDOM.createRoot(document.getElementById("app") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
