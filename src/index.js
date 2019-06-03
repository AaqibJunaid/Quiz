import React from "react";
import ReactDOM from "react-dom";
import QuizPage from "./features/Quiz/quizPage";
import "./index.css";

const rootElement = document.getElementById("root");
ReactDOM.render(<QuizPage />, rootElement);
module.hot.accept();
