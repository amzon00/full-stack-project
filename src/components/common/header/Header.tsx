import React from "react";
import "./header.css";

export default function Header() {
  return (
    <div>
      <nav className="navbar">
        <button className="fantasy">
          <span className="double">
            <span className="text">Login</span>
          </span>
        </button>
        <button className="fantasy">
          <span className="double">
            <span className="text">Register</span>
          </span>
        </button>
      </nav>
    </div>
  );
}
