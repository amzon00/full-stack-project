import React from "react";
import "./main.css";
import Header from "../common/header/Header";

export default function main() {
  return (
    <div>
      <Header />
      <div>
        <img
          className="main-logo-img"
          src="https://fontmeme.com/permalink/200619/361465a6f4766e8b37dbbcfc24585e9b.png"
          alt="game-logo"
        />
      </div>
      <div className="main-buttons">
        <button className="fantasy main-btn">
          <span className="double">
            <span className="text">Create New Game</span>
          </span>
        </button>
        <button className="fantasy main-btn">
          <span className="double">
            <span className="text">Join Game</span>
          </span>
        </button>
        <button className="fantasy main-btn">
          <span className="double">
            <span className="text">Settings</span>
          </span>
        </button>
        <button className="fantasy main-btn">
          <span className="double">
            <span className="text">About us</span>
          </span>
        </button>
      </div>
    </div>
  );
}
