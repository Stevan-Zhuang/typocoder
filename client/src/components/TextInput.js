import React from "react";
import "../styles/TextInput.css";

function TextInput({ value, onChange, onKeyDown, onKeyPress, expectedText }) {
  let color = "var(--red)";
  if (expectedText === value) {
    color = "var(--green)";
  } else if (expectedText.startsWith(value)) {
    color = "var(--foreground)";
  }
  return (
    <input
      className="textInput"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      onKeyPress={onKeyPress}
      placeholder={expectedText}
      style={{ color, borderColor: color }}
    />
  );
}

export default TextInput;
