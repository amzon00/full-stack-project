import React from "react";
import "./login.css";

export default function Login() {
  return (
    <div className="wrapper">
      <form>
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
          <input type="text" name="username" />
        </div>
        <div className="login-password">
          {" "}
          <label htmlFor="password">
            <img
              src="https://fontmeme.com/permalink/200619/338f9afb141fb4aa9946f29198085956.png"
              alt="password-label"
            />
          </label>
          <input type="password" name="username" />
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
  );
}
