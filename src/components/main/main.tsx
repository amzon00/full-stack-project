import React, { ReactElement } from "react";
import "./main.css";
import Header from "../common/header/Header";

interface Props {}

export default function main({}: Props): ReactElement {
  document.getElementsByTagName("body")[0].style.backgroundImage =
    "url(https://images4.alphacoders.com/936/thumb-1920-936217.jpg)";
  // "url(https://wallpapershome.com/images/pages/pic_h/19760.jpg)"; // <--- alternative URL
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
        <button type="button" className="fantasy main-btn">
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
