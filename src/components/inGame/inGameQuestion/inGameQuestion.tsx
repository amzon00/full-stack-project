import React, { ReactElement } from "react";
import "./inGameQuestion.css";

interface Props {}

export default function inGameQuestion({}: Props): ReactElement {
  return (
    <div>
      <div className="container">
        <div className="question">
          <span className="question-text">Question text</span>
        </div>
        <div className="answers">
          <span className="answer-1">Answer-1</span>
          <span className="answer-2">Answer-2</span>
          <span className="answer-3">Answer-3</span>
          <span className="answer-4">Answer-4</span>
        </div>
      </div>
    </div>
  );
}
