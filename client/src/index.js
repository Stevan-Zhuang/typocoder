import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import TypingGame from "./TypingGame";
import SignInButton from "./SignInButton";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TypingGame />
    <SignInButton />
  </React.StrictMode>,
);
