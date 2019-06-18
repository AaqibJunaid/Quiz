import React, { Component } from "react";

class QuizPage extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div id="mainPage">
        <div id="mainPageBody">
          <div id="contentPanel">
            <h2 id="quizTitle">Quiz</h2>
              <div className="questionBox">
                <h1 className="question">What is 9+10</h1>
                <button className="questionButton">
                  1
                </button>
                <button className="questionButton">
                  14
                </button>
                <button className="questionButton">
                  21
                </button>
                <button className="questionButton">
                  19
                </button>
              </div>
            <button id="submit">
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default QuizPage;
