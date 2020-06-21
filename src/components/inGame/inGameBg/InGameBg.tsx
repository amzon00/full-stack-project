import React from "react";
import "./inGameBg.css";
import Header from "../../common/header/Header";

export default function InGameBg() {
  return (
    <div>
      <Header />
      <div className="username-container">
        <table>
          <tbody>
            <tr>
              <th>
                <p>User1: 100HP</p>
              </th>
            </tr>
            <tr>
              <th>
                <p>User2: 100HP</p>
              </th>
            </tr>
            <tr>
              <th>
                <p>User3: 100HP</p>
              </th>
            </tr>
            <tr>
              <th>
                <p>User4: 100HP</p>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <div id="avatar-1" className="circle-avatar"></div>
        <span id="avatar-2" className="circle-avatar"></span>
        <img
          className="circle-center"
          src="https://i.pinimg.com/originals/30/2b/df/302bdf53ac8fb5022480fd2fe37f1904.gif"
          alt="center-circle"
        />
        <span id="avatar-3" className="circle-avatar"></span>
        <span id="avatar-4" className="circle-avatar"></span>
      </div>
      <div className="magician"></div>
    </div>
  );
}