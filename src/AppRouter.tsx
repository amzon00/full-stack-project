import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/main/main";
import Register from "./components/register/register";
import Login from "./components/login/login";
import InGameBg from "./components/inGame/inGameBg/InGameBg";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/in-game" component={InGameBg} />
      </Switch>
    </div>
  );
}

export default App;
