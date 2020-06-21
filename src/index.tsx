import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppRouter from "./AppRouter";
import Header from "./components/common/header/Header";
import Login from "./components/login/login";
import Main from "./components/main/main";
import InGameBg from "./components/inGame/inGameBg/InGameBg";

ReactDOM.render(
  <React.StrictMode>
    {/* <AppRouter /> */}
    {/* <Header /> */}
    {/* <Login /> */}
    {/* <Main /> */}
    <InGameBg />
  </React.StrictMode>,
  document.getElementById("root")
);
