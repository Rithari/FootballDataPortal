import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/styleguide.css";
import AppRouter from "./AppRouter";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
