import React, { useState } from "react";

function TypingGame() {
  const [currentLines, setCurrentLines] = useState(getCodeLines());
  const [nextLines, setNextLines] = useState(getCodeLines());
  const [userInput, setUserInput] = useState("");

  function getCodeLines() {
    // TODO: remove hardcoded lines
    const lines = "The quick\nbrown fox\njumps over\nthe lazy\ndog";
    return lines.split("\n");
  }

  function handleInputChange(event) {
    setUserInput(event.target.value);
  }

  function handleKeyPress(event) {
    if (event.key === "Enter" && userInput === currentLines[0]) {
      completeLine();
    }
  }

  function completeLine() {
    setCurrentLines(currentLines.slice(1));
    if (currentLines.length === 1) {
      setCurrentLines(nextLines);
      setNextLines(getCodeLines());
    }
    setUserInput("");
  }

  return (
    <div>
      <p>Type these:</p>
      {currentLines.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
      <input
        value={userInput}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
}

export default TypingGame;
