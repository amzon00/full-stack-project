import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppRouter from "./AppRouter";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/common/header/Header";
import Login from "./components/login/login";
import Main from "./components/main/main";
import InGameBg from "./components/inGame/inGameBg/InGameBg";
import InGameQuestion from "./components/inGame/inGameQuestion/inGameQuestion";

ReactDOM.render(
  <React.StrictMode>
    <Router>{/* <AppRouter /> */}</Router>
    {/* <Header /> */}
    {/* <Login /> */}
    {/* <Main /> */}
    {/* <InGameBg /> */}
    <InGameQuestion />
  </React.StrictMode>,
  document.getElementById("root")
);
