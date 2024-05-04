import React from "react";
import "../styles/TextInput.css";

function TextInput({ value, onChange, onKeyPress, expectedText }) {
  let color = "var(--red)";
  if (expectedText === value && value !== "") {
    color = "var(--green)";
  } else if (expectedText.startsWith(value)) {
    color = "var(--foreground)";
  }
  return (
    <input
      className="textInput"
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
      placeholder={expectedText}
      style={{ color, borderColor: color }}
    />
  );
}

export default TextInput;
