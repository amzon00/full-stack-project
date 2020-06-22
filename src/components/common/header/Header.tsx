import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <div>
      <nav className="navbar">
        <NavLink to="/login">
          <button className="fantasy">
            <span className="double">
              <span className="text">Login</span>
            </span>
          </button>
        </NavLink>
        <NavLink to="/register">
          <button className="fantasy">
            <span className="double">
              <span className="text">Register</span>
            </span>
          </button>
        </NavLink>
      </nav>
    </div>
  );
}
