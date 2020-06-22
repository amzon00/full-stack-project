import React, { useState } from "react";
import "./login.css";
import Header from "../common/header/Header";

export interface LoginState {
  username: string;
  password: string | number;
}

export default function Login<LoginState>() {
  const [username, setUsername] = useState({});
  const [password, setPassword] = useState({});
  document.getElementsByTagName("body")[0].style.backgroundImage =
    "url(https://wallpapershome.ru/images/pages/pic_h/19670.jpg)";

  return (
    <div>
      <Header />
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <img
            src="https://fontmeme.com/permalink/200619/ff2a1a9af93c57f75b06db8fb84f24c1.png"
            alt="Login"
          />
          <div className="login-user">
            <label htmlFor="username">
              <img
                src="https://fontmeme.com/permalink/200619/2d5c1f0860a686e75722c1daed76e766.png"
                alt="username-label"
              />
            </label>
            <input
              type="text"
              name="username"
              onChange={(event): any =>
                setUsername({ username: event.target.value })
              }
            />
          </div>
          <div className="login-password">
            {" "}
            <label htmlFor="password">
              <img
                src="https://fontmeme.com/permalink/200619/338f9afb141fb4aa9946f29198085956.png"
                alt="password-label"
              />
            </label>
            <input
              type="password"
              name="username"
              onChange={(event): any =>
                setPassword({ password: event.target.value })
              }
            />
          </div>
          <div className="login-button">
            <button type="submit" className="fantasy">
              <span className="double">
                <span className="text">Enter</span>
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(password, username);
  }
}
