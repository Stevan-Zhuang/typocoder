import React, { useState } from "react";

function TypingGame() {
  const [currentLines, setCurrentLines] = useState(getCodeLines());
  const [userInput, setUserInput] = useState("");
  const [score, setScore] = useState(0);

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
      setScore(score + 1);
      setCurrentLines(currentLines.slice(1));
      setUserInput("");
    }
  }

  return (
    <div>
      <p>Score: {score}</p>
      <p>Type this: {currentLines[0]}</p>
      <input
        value={userInput}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
}

export default TypingGame;
