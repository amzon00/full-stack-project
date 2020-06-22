import React, { ReactElement } from "react";
import "./inGameBg.css";
import Header from "../../common/header/Header";

interface Props {}

export default function InGameBg({}: Props): ReactElement {
  document.body.style.background = "black";
  return (
    <div>
      <Header />
      <div className="username-container">
        <table>
          <tbody>
            <tr>
              <td>
                <p>User1: 100HP</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>User2: 100HP</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>User3: 100HP</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>User4: 100HP</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <img
          className="circle-center"
          src="https://i.pinimg.com/originals/30/2b/df/302bdf53ac8fb5022480fd2fe37f1904.gif"
          alt="center-circle"
        />
        <span id="avatar-1" className="avatar-frame"></span>
        <span id="avatar-2" className="avatar-frame"></span>
        <span id="avatar-3" className="avatar-frame"></span>
        <span id="avatar-4" className="avatar-frame"></span>
      </div>
      <div className="magician"></div>
    </div>
  );
}
