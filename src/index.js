import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./pages/Cardlist/App";
import reportWebVitals from "./reportWebVitals";
import Main from "./pages/Cardlist/App";
import Detail from "./pages/Detail/Detail";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Detail />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
