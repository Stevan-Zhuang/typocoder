import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import TypingGame from "./TypingGame";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TypingGame />
  </React.StrictMode>,
);
