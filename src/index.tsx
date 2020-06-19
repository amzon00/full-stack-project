import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppRouter from "./AppRouter";
import Header from "./components/common/header/Header";
import Login from "./components/login/login";

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
    <Header />
    <Login />
  </React.StrictMode>,
  document.getElementById("root")
);
