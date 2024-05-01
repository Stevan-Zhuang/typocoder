import React from "react";

function TextDisplay({ lines }) {
  return (
    <div>
      <p>Type these:</p>
      {lines.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  );
}

export default TextDisplay;
